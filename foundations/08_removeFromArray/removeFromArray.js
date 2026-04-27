const removeFromArray = function(arr, ...tar) {
    return arr.filter(x => !tar.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
