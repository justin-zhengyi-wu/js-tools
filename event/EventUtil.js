var EventUtil = {};

EventUtil.addEventListener = function(target, event, handler) {
    if (target.addEventListener) {
        target.addEventListener(event, handler, false);
    } else if (target.attachEvent) {
        target.attachEvent("on" + event, handler);
    } else {
        target["on" + event] = handler;
    }
};

EventUtil.removeEventListener = function(target, event, handler) {
    if (target.removeEventListener) {
        target.removeEventListener(event, handler, false);
    } else if (target.detachEvent) {
        target.detachEvent("on" + event, handler);
    } else {
        target["on" + event] = null;
    }
};

EventUtil.formatEvent = function(event) {
    var isOpera = navigator.userAgent.indexOf("Opera") > -1;
    var isIE = navigator.userAgent.indexOf("MSIE") > -1 && !isOpera;
    var isWin = (navigator.platform == "Win32") || (navigate.platform == "Windows");
    if (isIE && isWin) {
        event.charCode = (event.type == "keypress") ? event.keyCode : 0;
        event.eventPhase = 2;
        event.isChar = (event.charCode > 0);
        event.pageX = event.clientX + document.body.scrollLeft;
        event.pageY = event.clientY + document.body.scrollRight;
        event.preventDefault = function() {
            this.returnValue = false;
        };
        if (event.type == "mouseout") {
            event.relatedTarget = event.toElement;
        } else if (event.type == "mouseover") {
            event.relatedTarget = event.fromElement;
        }
        event.stopPropagation = function() {
            this.cancelBubble = true;
        };
        event.target = event.srcElement;
        event.time = (new Date()).getTime();
    }
    return event;
};

EventUtil.getEvent = function() {
    if (window.event) {
        return this.formatEvent(window.event);
    } else {
        return EventUtil.getEvent.caller.arguments[0];
    }
};
