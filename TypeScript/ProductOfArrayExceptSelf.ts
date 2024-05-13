// Medium
// https://leetcode.com/problems/product-of-array-except-self/
// 238. Product of Array Except Self

// time: O(n)
// space: O(1) - considering the `result` does not change de space complexity
// rules: 1. cant use / operator 2. must be O(n)

function productExceptSelf(nums: number[]): number[] {
    const result = Array.from({length: nums.length}, () => 1)
    let prefix = 1
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix
        prefix = prefix * nums[i]
    }

    let sufix = 1
    for (let i = nums.length-1; i >= 0; i--) {
        result[i] = result[i] * sufix
        sufix = sufix * nums[i]
    }

    return result
};