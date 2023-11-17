/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function selfDividingNumbers(left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i);
    }
  }

  return result;
}

function isSelfDividing(num) {
  return Array.from(String(num), Number).every(
    (digit) => digit !== 0 && num % digit === 0
  );
}
