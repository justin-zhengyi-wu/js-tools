var arr1 = [1,2,2,2,3,3,3,4,5,6], arr2 = [];

for (var i = 0, l = arr1.length; i < l; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
        arr2.push(arr1[i]);
    }
}

console.log(arr2);
