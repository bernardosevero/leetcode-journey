// easy
// https://leetcode.com/problems/valid-anagram/
// 242. Valid Anagram

// time complexity: O(n)
// space complexity: O(n)


function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false

    const mapS = new Map<string, number>()
    const mapT = new Map<string, number>()

    for(let i = 0; i<s.length; i++) {
        mapS.set(s[i], (mapS.get( s[i] ) || 0) + 1)
        mapT.set(t[i], (mapT.get( t[i]) || 0) + 1)
    }

    for(let i = 0; i<s.length; i++) {
        if(mapS.get(s[i]) !== mapT.get(s[i]))
            return false 
    }

    return true
};