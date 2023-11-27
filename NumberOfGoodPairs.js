/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
    const numCount = new Map();
    
    for (const num of nums) {
        if (numCount.has(num)) {
            numCount.set(num, numCount.get(num) + 1);
        } else {
            numCount.set(num, 1);
        }
    }
    
    let goodPairs = 0;
    for (const count of numCount.values()) {
        goodPairs += (count * (count - 1)) / 2;
    }
    
    return goodPairs;
}

