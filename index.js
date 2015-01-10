module.exports = (function() {

    var synTools = {};



    /**
     * Remove an element from an array
     *
     * > remove([1, 2, 3], 2)
     *
     * @param {Array} arr
     * @param {Mixed} el
     * @return {Array}
     */

    synTools.removeArrayElement = function(arr, el) {
        var i = arr.indexOf(el);
        if (~i) arr.splice(i, 1);
        return arr;
    };


    /*
     * Index of array element
     *
     * > indexOf([1, 2, 3], 2)
     * > 1
     *
     * > indexOf([1, 2, 3], 10)
     * > -1
     *
     * @param {Array} arr
     * @param {Mixed} obj
     * @return {Number}
     */

    synTools.indexOf = function(arr, obj) {
        if ([].indexOf) return arr.indexOf(obj);
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === obj) return i;
        }
        return -1;
    };


    synTools.mergeRecursive = function(obj1, obj2) {
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if (obj2[p].constructor == Object) {
                    obj1[p] = mergeRecursive(obj1[p], obj2[p]);
                } else {
                    obj1[p] = obj2[p];
                }
            } catch (e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    };


    synTools.isArray = function(arg) {
        return Array.isArray(arg) ||
            'object' == typeof arg && '[object Array]' == toString.call(arg)
    };

    synTools.isDate = function(arg) {
        return 'object' == typeof arg && '[object Date]' == toString.call(arg)
    };

    synTools.isRegExp = function(arg) {
        return 'object' == typeof arg && '[object RegExp]' == toString.call(arg)
    };



    return synTools;

})();