var MyEvent = {
    events: {},
    dispatchEvent: function (event, data) {
        var handlers = this.events[event];
        if (handlers) {
            for (var i = 0, l = handlers.length; i < l; ++i) {
                try {
                    handlers[i](data);
                } catch (e) {
                }
            }
        }
    },
    addEventListener: function (event, handler) {
        if (!this.events[event]) {
            this.events[event] = [handler];
        } else {
            this.events[event].push(handler);
        }
    },
    removeEventListener: function (event, handler) {
        var handlers = this.events[event];
        if (handlers) {
            for (var i = 0, l = handlers.length; i < l; ++i) {
                if (handlers[i] == handler) {
                    handlers.splice(i, 1);
                    break;
                }
            }
        }
    },
    removeEventListeners: function (event) {
        if (event) {
            delete this.events[event];            
        }
    }
}
