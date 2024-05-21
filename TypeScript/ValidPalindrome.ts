// EASY
// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome

// time complexity: o(n)
// space complexity: o(1)

function isPalindrome(s: string): boolean {
    let left: number = 0
    let right: number = s.length - 1

    while(left < right) {
        while (left < right && !isAlphanumeric(s[left])) left++
        while (left < right && !isAlphanumeric(s[right])) right--

        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false
        
        left++
        right--
    }

return true
};

function isAlphanumeric(c: string): boolean {
    return /^[a-z0-9]+$/i.test(c)
}