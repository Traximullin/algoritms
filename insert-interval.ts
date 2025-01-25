{
    function merge(intervals: number[][]): number[][] {
        intervals.sort((a,b) => a[0] - b[0]);
        
        const result: number[][] = [];
    
        let last = intervals[0];
    
        for (let i = 1; i < intervals.length; i++) {
    
            if (last[1] >= intervals[i][0]) {
                last[1] = Math.max(last[1], intervals[i][1]);         
            } else {
                result.push(last)
                last = intervals[i];
            }
    
    
        }
    
    
        return result.concat([last])
    };

    function insert(intervals: number[][], newInterval: number[]): number[][] {
        intervals.push(newInterval);

        return merge(intervals)
    };
}