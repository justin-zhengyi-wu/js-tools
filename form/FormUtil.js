var FormUtil = {};

/**
 * Usage:
 * <body onload="FormUtil.focusFirst()"></body>
 */
FormUtil.focusFirst = function() {
    if (document.forms.length > 0 && document.forms[0].elements[0].value != "") {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var field = document.forms[0].elements[i];
            if (field.type != "hidden") {
                field.focus();
                return;
            }
        }
    }
}

FormUtil.selectWhenFocus = function() {
    var inputFields = document.getElementsByTagName("input");
    var textareaFields = document.getElementsByTagName("textarea");
    var focusHandler = function() { this.select(); };
    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].type == "text" || inputFields[i].type == "password") {
            inputFields[i].onfocus = focusHandler;
        }
    }
    for (var i = 0; i < textareaFields.length; i++) {
        textareaFields[i].onfocus = focusHandler;
    }
};

/**
 * Usage:
 * <input type="text" maxlength=3 onkeyup="FormUtil.tabForward(this)" />
 */
FormUtil.tabForward = function(textBox) {
    var form = textBox.form;
    if (form.elements[form.elements.length-1] != textBox
        && textBox.value.length == textBox.getAttribute("maxlength")) {
        for (var i = 0; i < form.elements.length; i++) {
            if (form.elements[i] == textBox) {
                for (var j = i+1; j < form.elements.length; j++) {
                    if (form.elements[j].type != "hidden") {
                        form.elements[j].focus();
                        return;
                    }
                }
                return;
            }
        }
    }
}
