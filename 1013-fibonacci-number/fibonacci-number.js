/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo= {}) {
    if(n === 0) return 0;
    if(n <= 1) return n;

     if(memo[n]) return memo[n];

     memo[n] = fib(n-1, memo) + fib(n-2, memo);
     return memo[n];
    
};