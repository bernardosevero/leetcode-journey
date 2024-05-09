// easy
// https://leetcode.com/problems/two-sum
// 1. Two Sums

// time complexity: O(n)
// space complexity: O(n)

function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map()

    for(let i = 0; i<nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [Number(map.get(target - nums[i])), i]
        }

        map.set(nums[i], i)
    }

    return []
};