function extend(subClass, superClass) {
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superclass = superClass.prototype;
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}
// http://stackoverflow.com/questions/12691020/why-javascripts-extend-function-has-to-set-objects-prototypes-constructor-pro
