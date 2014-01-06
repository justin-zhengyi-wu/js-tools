if (typeof jQuery === 'undefined') {
    (function() {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement('script');
        script.src = 'http://code.jquery.com/jquery-latest.min.js';
        head.appendChild(script);
    })();
}
