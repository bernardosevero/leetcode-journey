// HASHMAP AND ARRAY
// https://leetcode.com/problems/insert-delete-getrandom-o1/

// time complexity: O(1)
// space complexity: O(1)

class RandomizedSet {
    values: number[]
    hashMap: Map<number, number>

    constructor() {
        this.values = []
        this.hashMap = new Map<number, number>()
    }

    insert(val: number): boolean {
        if(this.hashMap.has(val)) return false
        
        this.values.push(val)
        this.hashMap.set(val, this.values.length - 1)
        return true
    }

    remove(val: number): boolean {
        if(!this.hashMap.has(val)) return false

        const currentIndex = Number(this.hashMap.get(val))
        const lastIndex = this.values.length-1


        if(currentIndex === lastIndex) {
            this.values.pop()
            this.hashMap.delete(val)
            return true
        }

        const lastIndexValue = this.values[lastIndex]

        this.values[currentIndex] = lastIndexValue
        this.values[lastIndex] = val
        this.values.pop()

        this.hashMap.delete(val)
        this.hashMap.set(lastIndexValue, currentIndex)

        return true
    }

    getRandom(): number {
        return this.values[Math.floor(Math.random() * this.values.length)];
    }
}