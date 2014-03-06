function setCookie(name, value, expires, path, domain, secure) {
    var cookie = name + "=" + encodeURIComponent(value);
    if (expires) {
        cookie += "; expires=" + expires.toGMTString();
    }
    if (path) {
        cookie += "; path=" + path;
    }
    if (domain) {
        cookie += "; domain=" + domain;
    }
    if (secure) {
        cookie += "; secure;";
    }
    document.cookie = cookie;
}

function getCookie(name) {
    var regexStr = "(?:; )?" + name + "=([^;]*);?";
    var regex = new RegExp(regexStr);
    if (regex.test(document.cookie)) {
        return decodeURIComponent(RegExp.$1);
    } else {
        return null;
    }
}

function deleteCookie(name, path, domain) {
    setCookie(name, "", new Date(0), path, domain);
}
