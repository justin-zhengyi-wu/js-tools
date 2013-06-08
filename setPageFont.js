(function(doc) {
    var body = doc.getElementsByTagName('body')[0];
    var originStyle = body.style || '';
    var extraStyle = 'font-family: "WenQuanYi Micro Hei"';
    var newStyle = originStyle ? extraStyle + ';' + originStyle : extraStyle;
    body.setAttribute('style', newStyle);
})(document);
