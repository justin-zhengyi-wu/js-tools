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

function clearCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
    	var cookie = cookies[i];
    	var eqPos = cookie.indexOf("=");
    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
