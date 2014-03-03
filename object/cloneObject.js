/**
 * Clone an Object deeply.
 */
var cloneObject = function(obj) {
    if (obj === null || obj === undefined || typeof obj === 'boolean' || typeof obj === 'number' || obj instanceof Date || obj instanceof RegExp || obj instanceof Function) {
        return obj;
    } else if (obj.constructor === Array) {
        var newArray = [], i = obj.length;
        while (i--) {
            newArray[i] = typeof obj[i] === 'object' ? cloneObject(obj[i]) : obj[i];
        }
        return newArray;
    } else {
        var newObj = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = typeof obj[key] === 'object' ? cloneObject(obj[key]) : obj[key];
            }
        }
        return newObj;
    }
};



// Test Codes

var testObj = {a: undefined, b: null, c: false, d: 23, f: function() {}, g: { a: new Date(), b: []}, str: 'str', aaa: [{d: [{c: null}]}]};
var result = cloneObject(testObj);
