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

var quickSort = function(arr) {
    if (!arr) {
        return null;
    }
    if (arr.length <= 1) {
        return arr;
    }
    var left = [], right = [];
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    for (var i = 0; i < arr.length, i++) {
        if (arr[i] < pivot || (arr[i] == pivot && i < pivotIndex)) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot]).concat(right);
}

var quickSort = function(arr, key) {
    if (!arr) {
        return null;
    }
    if (arr.length <= 1) {
        return arr;
    }
    var left = [], right = [];
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    for (var i = 0; i < arr.length, i++) {
        if (!key && ((arr[i] < pivot) || (arr[i] == pivot && i < pivotIndex)) || (key && (arr[i][key] < pivot[key] || (arr[i][key] == pivot[key] && i < pivotIndex)))) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot]).concat(right);
}
