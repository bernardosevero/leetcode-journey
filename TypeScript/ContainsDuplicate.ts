// ARRAY AND HASHMAP

// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

// time complexity: O(n)
// space complexity: O(n)

function containsDuplicate(nums: number[]): boolean {
    if (nums.length < 2) return false

    const map: Map<number,boolean> = new Map<number,boolean>()

    for(let i = 0;i<nums.length;i++) {
        if(map.has(nums[i])) {
            return true
        }

        map.set(nums[i], true)
    }

    return false
};
