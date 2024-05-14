package Go

// medium
// https://leetcode.com/problems/group-anagrams/
// 49. Group Anagrams

// time complexity: O(m*n)
// space complexity: O(n)

type Key [26]byte

func groupAnagrams(strs []string) [][]string {
	hashMap := make(map[Key][]string)
	var result [][]string

	for _, str := range strs {
		var counter Key
		for i := range str {
			counter[str[i]-'a']++
		}
		hashMap[counter] = append(hashMap[counter], str)
	}

	for _, v := range hashMap {
		result = append(result, v)
	}

	return result
}
