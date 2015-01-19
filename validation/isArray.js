function isArray(obj){
    if (Array.isArray && (Array.isArray instanceof Function)) {
        return Array.isArray(obj);
    }
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}
