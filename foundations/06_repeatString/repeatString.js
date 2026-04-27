const repeatString = function(message, num) {
    if(num<0) return 'ERROR';
    var s = '';
    for(var i=0; i<num; i++)
        s += message;
    return s;
};

// Do not edit below this line
module.exports = repeatString;
