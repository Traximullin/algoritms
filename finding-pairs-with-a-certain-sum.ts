class FindSumPairs {
    map1: Map<number, number>;
    map2: Map<number, number>;
    nums: number[];
    constructor(nums1: number[], nums2: number[]) {
        this.nums = nums2;
        this.map1 = new Map();
        for (const num of nums1) {
            this.map1.set(num, (this.map1.get(num) ?? 0) + 1);
        }

        this.map2 = new Map();
        for (const num of nums2) {
            this.map2.set(num, (this.map2.get(num) ?? 0) + 1);
        }
    }

    add(index: number, value: number): void {
        const curValue = this.nums[index];
        const curFreq = this.map2.get(curValue);
        if (curFreq === 1) {
            this.map2.delete(curValue);
        } else {
            this.map2.set(curValue, curFreq - 1);
        }

        const newValue = curValue + value;
        this.map2.set(newValue, (this.map2.get(newValue) ?? 0) + 1);
        this.nums[index] += value;
    }

    count(tot: number): number {
        let count = 0;

        for (const { 0: num, 1: freq } of this.map1) {
            count += freq * (this.map2.get(tot - num) ?? 0);
        }

        return count;
    }
}