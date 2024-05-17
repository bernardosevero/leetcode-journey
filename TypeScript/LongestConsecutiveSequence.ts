// SET
// https://leetcode.com/problems/longest-consecutive-sequence/description/

// time complexity: O(N)
// space complexity: O(N)

function longestConsecutive(nums: number[]): number {
    const set = new Set<number>(nums)
    let result = 0

    for(let i = 0; i < nums.length; i++) {
        if(!set.has(nums[i] -1)) {
            let length = 0
            while (set.has(nums[i]+length)) {
                length++
            }
            result = result > length ? result : length
        }
    }

    return result
};

// function longestConsecutive(nums: number[]): number {
//     const set = new Set<number>(nums)
//     let result = 0

//     for(const num of set) {
//         if(!set.has(num+1)) {
//             let length = 1
//             let currentVal = num
//             while (set.has(--currentVal)) {
//                 length++
//             }
//             result = Math.max(result, length)
//         }
//     }

//     return result
// };