/**
 * Remove the html tags from string.
 */
String.prototype.stripHtml = function() {
    var regexTag = /<(?:.|\s)*?>/g;
    return this.replace(regexTag, "");
}
