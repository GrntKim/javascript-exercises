const fibonacci = function(input) {
    const n = Number(input);
    if (n < 0) return "OOPS";
    if (n < 2) return n;
    let prev = 0, cur = 1;
    for(let i = 2; i <= n; i++) {
        [prev, cur] = [cur, prev + cur];
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
