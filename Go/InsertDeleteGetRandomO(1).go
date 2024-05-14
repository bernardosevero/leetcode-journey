package Go

import "math/rand"

// HASHMAP AND ARRAY
// https://leetcode.com/problems/insert-delete-getrandom-o1/

// time complexity: O(1)
// space complexity: O(1)

type RandomizedSet struct {
	list  []int
	hashM map[int]int
}

func Constructor() RandomizedSet {
	return RandomizedSet{
		hashM: map[int]int{},
		list:  []int{},
	}
}

func (this *RandomizedSet) Insert(val int) bool {
	_, exist := this.hashM[val]
	if exist {
		return false
	}

	this.list = append(this.list, val)
	this.hashM[val] = len(this.list) - 1

	return true
}

func (this *RandomizedSet) Remove(val int) bool {
	currentIndex, exist := this.hashM[val]
	if !exist {
		return false
	}

	lastIndex := len(this.list) - 1

	if currentIndex == lastIndex {
		delete(this.hashM, val)
		this.list = this.list[:lastIndex]
		return true
	}

	lastIndexValue := this.list[lastIndex]
	this.hashM[lastIndexValue] = currentIndex

	this.list[currentIndex] = lastIndexValue
	this.list[lastIndex] = currentIndex

	delete(this.hashM, val)
	this.list = this.list[:lastIndex]

	return true
}

func (this *RandomizedSet) GetRandom() int {
	index := rand.Intn(len(this.list))
	return this.list[index]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Insert(val);
 * param_2 := obj.Remove(val);
 * param_3 := obj.GetRandom();
 */
