/**
 * Javascript language enhancement.
 * Add trim function on Strings' prototype chain.
 * It will remove the aheading and tailed empty spaces of a string.
 */
(function() {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "");
    };
})();
