package Go

// HASHMAP
// https://leetcode.com/problems/number-of-good-pairs/

// time complexity: o(n)
// space complexity: o(n)

// Math way :)
func numberOfGoodPairsMath(nums []int) int {
	counter := make(map[int]int)
	var result int

	for _, num := range nums {
		counter[num]++
	}

	for _, value := range counter {
		result += (value * (value - 1) / 2)
	}

	return result
}

// Math haters way :)
func numberOfGoodPairsNotMath(nums []int) int {
	counter := make(map[int]int)
	var result int

	for _, num := range nums {
		result += counter[num]
		counter[num]++
	}

	return result
}
