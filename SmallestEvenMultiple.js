/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  if (n <= 0 || !Number.isInteger(n)) {
    return 'Please provide a positive integer.';
  }
  else{
    if (n % 2 === 0) {
    return n;
    } 
    else {
    return n * 2;
    }
  }
};
