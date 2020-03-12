module.exports = function reverse(n){
    n = Math.abs(n);
    n = String(n).split("").reverse();
    n = n.reduce(function(sum, current) {
        return sum + current;
    },);
    return Number(n);
}
