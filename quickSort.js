var quickSort = function(arr) {
    if (!arr) {
        return null;
    }
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [], right = [];
    for (var i= 0; i < arr.length; i++) {
        var item = arr[i];
        if (item < pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    }
    return quickSort(left).concat([pivot]).concat(right);
}
