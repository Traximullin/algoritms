{
    const MyHashSet = function() {
        this.nums = []
    }

    MyHashSet.prototype.add = function(key) {
        if(!this.nums.includes(key)) {
            this.nums.push(key)
        }
    };

    MyHashSet.prototype.contains = function(key) {
        return this.nums.includes(key)
    };

    MyHashSet.prototype.remove = function(key) {
        for(let i = 0; i < this.nums.length; i++) {
            if(this.nums[i] === key) {
                this.nums.splice(i,1)
                break
            }
        }
    };


    const obj = new MyHashSet()
    obj.add(1)
    obj.add(2)
    console.log(obj)
    console.log(obj.remove(2))
    console.log(obj)
    console.log(obj.contains(2))
}