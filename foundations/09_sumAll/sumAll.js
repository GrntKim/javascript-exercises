const sumAll = function(st, ed) {
    if(st < 0 || ed < 0 || !Number.isInteger(st) || !Number.isInteger(ed)) return 'ERROR';
    if(st > ed) {
        var tmp = st;
        st = ed;
        ed = tmp;
    }
    var ret = 0;
    for(var i=st; i<=ed; i++) ret += i;
    return ret;
};

// Do not edit below this line
module.exports = sumAll;
