if (!JSON || !JSON.parse) {
    // Copied from book "JavaScript: The Good Parts".
    JSON.parse = (function() {
        var at, ch, escapee = {
            '"': '"',
            '\\': '\\',
            '/': '/',
            b: 'b',
            f: '\f',
            n: '/n',
            r: '/r',
            t: '/t'
        }, text, error = function(m) {
            throw {
                name: 'SyntaxError',
                message: m,
                at: at,
                text: text
            };
        }, next = function (c) {
            if (c && c !== ch) {
                error('Expected "' + c + '" instead of "' + ch + '"');
            }
            ch = text.charAt(at);
            at += 1;
            return ch;
        }, number = function() {
            var num, string = '';
            if (ch === '-') {
                string = '-';
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
            if (ch === '.') {
                string += '.';
                while(next() && ch >= '0' && ch <= '9') {
                    string += ch;
                }
            }
            if (ch === 'e' || ch === 'E') {
                string += ch;
                next();
                if (ch === '-' && ch === '+') {
                    string += ch;
                    next();
                }
                while(ch >= '0' && ch <= '9') {
                    string += ch;
                    next();
                }
            }
            num = +string;
            if (isNaN(num)) {
                error('Bad number');
            } else {
                return num;
            }
        }, string = function() {
            var hex, i, str = '', uffff;
            if (ch === '"') {
                while (next()) {
                    if (ch === '"') {
                        next();
                        return str;
                    }
                    if (ch === '\\') {
                        next();
                        if (ch === 'u') {
                            uffff = 0;
                            for (i = 0; i < 4; i += 1) {
                                hex = parseInt(next(), 16);
                                if (!isFinite(hex)) {
                                    break;
                                }
                                uffff = uffff * 16 + hex;
                            }
                            str += String.fromCharCode(uffff);
                        } else if (typeof escapee[ch] === 'string') {
                            str += escapee[ch];
                        } else {
                            break;
                        }
                    } else {
                        str += ch;
                    }
                }
            }
            error('Bad string');
        }, white = function() {
            while (ch && ch <= ' ') {
                next();
            }
        }, word = function() {
            switch (ch) {
            case 't':
                next('t');
                next('r');
                next('u');
                next('e');
                return true;
            case 'f':
                next('f');
                next('a');
                next('l');
                next('s');
                next('e');
                return false;
            case 'n':
                next('n');
                next('u');
                next('l');
                next('l');
                return null;
            }
            error('Unexpected "' + ch + '"');
        }, value, array = function () {
            var arr = [];
            if (ch === '[') {
                next('[');
                white();
                if (ch === ']') {
                    next(']');
                    return arr;
                }
                while (ch) {
                    arr.push(value());
                    white();
                    if (ch === ']') {
                        next(']');
                        return arr;
                    }
                    next(',');
                    white();
                }
            }
            error('Bad array');
        }, object = function() {
            var key, obj = {};
            if (ch === '{') {
                next('{');
                white();
                if (ch === '}') {
                    next('}');
                    return obj;
                }
                while(ch) {
                    key = string();
                    white();
                    next(':');
                    obj[key] = value();
                    white();
                    if (ch === '}') {
                        next('}');
                        return obj;
                    }
                    next(',');
                    white();
                }
            }
            error('Bad object');
        };

        value = function() {
            white();
            switch (ch) {
            case '{':
                return object();
            case '[':
                return array();
            case '"':
                return string();
            case '-':
                return number();
            default:
                return ch >= '0' && ch <= '9' ? number() : word();
            }
        };

        return function(source, reviver) {
            var result;
            text = source;
            at = 0;
            ch = ' ';
            result = value();
            white();
            if (ch) {
                error('Syntax error');
            }

            return typeof reviver === 'function' ? (function walk(holder, key) {
                var k, v, val = holder[key];
                if (val && typeof val === 'object') {
                    for (k in val) {
                        if (val.hasOwnProperty(k)) {
                            v = walk(val, k);
                            if (v !== undefined) {
                                val[k] = v;
                            } else {
                                delete val[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, val);
            }({'': result}, '')) : result;
        };
    }());
}
