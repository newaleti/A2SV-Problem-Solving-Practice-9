/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 1) return 0;

    const isPrime = {};

    for (let i = 2; i < n; i++) {
        isPrime[i] = true;
    }

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}

