// Base Class Definition
var Base = function(name) {
    this.name = name;
};
Base.prototype.say = function() {
    console.log('I am', this.name);
};

// Sub Class Definiion
var Sub = function(name) {
    this.name = name;
};
Sub.prototype = new Base();
Sub.prototype.constructor = Sub;

// Usage
var base = new Base('BaseClass');
base.say();

var sub = new Sub('SubClass');
sub.say();
