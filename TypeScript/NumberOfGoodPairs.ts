// HASHMAP
// https://leetcode.com/problems/number-of-good-pairs/

// time complexity: o(n)
// space complexity: o(n)

function numIdenticalPairs(nums: number[]): number {
    const map: Map<number, number> = new Map<number, number>()
    let sum = 0

    for(let i=0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            sum += map.get(nums[i]) || 0 //factorial ??? study behavior
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }

    return sum
};


console.log(numIdenticalPairs([1,2, 2, 3, 2, 2])) // -> 6
console.log(numIdenticalPairs([1,2, 2, 3,])) // -> 1
console.log(numIdenticalPairs([1,2,3])) // -> 0
