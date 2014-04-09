/**
 * Do deep compare to judge whether two JSON strings are equals/similar.
 * 
 * @author zhengywu
 * @param str1
 *            The base JSON string to be compared with.
 * @param str2
 *            The JSON string to be compared.
 * @param strictMode
 *            if true, do not ignore null values.
 */
function compareJsonString(str1, str2, strictMode) {
    var o1 = JSON.parse(str1);
    var o2 = JSON.parse(str2);
    return deepEquals(o1, o2, strictMode);
}

/**
 * Do deep compare to judge whether two objects are equals/similar.
 * 
 * @author zhengywu
 * @param o1
 *            The base object to be compared with.
 * @param o2
 *            The object to be compared.
 * @param strictMode
 *            if true, do not ignore null values.
 */
function deepEquals(o1, o2, strictMode) {
    var keys1 = Object.keys(o1).sort();
    var keys2 = Object.keys(o2).sort();
    var ignoreKeys = [];

    if (!strictMode) {
        keys1 = keys1.filter(function(k) {
            if (o1[k] === null) {
                ignoreKeys.push(k);
                return false;
            } else {
                return true;
            }
        });
        keys2 = keys2.filter(function(k2) {
            return ignoreKeys.indexOf(k2) == -1;
        });
    }

    if (keys1.length !== keys2.length) {
        console.log("The numbers of keys do not match. Expected keys are ["
                + keys1 + "], but [" + keys2 + "] found.");
        return false;
    }

    return keys1.every(function(k) {
        if (typeof o1[k] == "object" && typeof o2[k] == "object") {
            return deepEquals(o1[k], o2[k], strictMode);
        } else {
            if (o1[k] != o2[k]) {
                console.log("The values of \"" + k
                        + "\" do not match, expected value is " + o1[k]
                        + ", but " + o2[k] + " found.");
                return false;
            } else {
                return true;
            }
        }
    });
}
