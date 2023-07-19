{
    /* 
        !TODO 
        https://leetcode.com/problems/non-overlapping-intervals/description/
    */
    const eraseOverlapIntervals = function(intervals) {
        let count = 0

        intervals.sort()
        // intervals = intervals.map(elem => elem[1] - elem[0])

        // intervals.forEach((elem,_,self) => {
        //     if(self.indexOf(elem) === self.lastIndexOf(elem)) {
        //         count++
        //     }
        // })
        
        for(let i = 0; i < intervals.length - 1; i++) {
            if(intervals[i][1] !== intervals[i + 1][0]) {
                count++
            }
        }

        return count
    };

    console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]))
}