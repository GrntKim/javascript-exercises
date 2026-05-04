const palindromes = function (str) {
    const converted = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = converted.length-1;
    while(left < right) {
        if(converted[left] !== converted[right]) return false;
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
