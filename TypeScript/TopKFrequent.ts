// medium
// https://leetcode.com/problems/top-k-frequent-elements/
// 347. Top K Frequent Elements

// time complexity: O(n)
// space complexity: O(n)

function topKFrequent(nums: number[], k: number): number[] {
    const map: Map<number, number> = new Map<number, number>()
    let counter: number[][] = Array.from({length: nums.length+1}, () => [])
    let result: number[] = []

    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    map.forEach((value, key) => {
        counter[value].push(key)
    })

    for(let i = counter.length-1; i >= 0; i--) {
        for(let j = 0; j < counter[i].length; j++) {
            if(Number.isInteger(counter[i][j]))
                result.push(counter[i][j])

            if(k <= result.length) 
                return result
        }
    }

    return []
};