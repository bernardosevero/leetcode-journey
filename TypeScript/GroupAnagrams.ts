// medium
// https://leetcode.com/problems/group-anagrams/
// 49. Group Anagrams

// time complexity: O(n)
// space complexity: O(m*n)

function groupAnagrams(strs: string[]): string[][] {
    const anagrams = new Map<string, string[]>()

    for(let i = 0; i < strs.length; i++) {
        let counter = Array.from({length: 26}, () => 0)

        for(let j = 0; j < strs[i].length; j++) {
            counter[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)] += 1 
        }
        anagrams.set(counter.toString(), [...anagrams.get(counter.toString()) || [], strs[i]])
    }


    return Array.from(anagrams.values())
};