/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[i + n]);
    }

    return result;
}
