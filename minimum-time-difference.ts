{
    const helper = (time: string): number => {
        const [h, m] = time.split(":");
    
        const _h = h === '00' ? 24 : parseInt(h, 10);
        const value = _h * 60 + parseInt(m, 10);
    
        if (value === 0) 
            return 1440;
    
        return value;
    }
    
    function findMinDifference(timePoints: string[] | number[]): number {
        let min = Number.MAX_SAFE_INTEGER;
    
        timePoints = (timePoints as string[]).map(time => helper(time)).sort((a, b) => a - b);
    
    
        timePoints = [...timePoints, timePoints[0] + 1440];
    
        for (let i = 1; i < timePoints.length; i++) {
            const value = timePoints[i] - timePoints[i - 1];

            min = Math.min(min, value);
        }
    
        return min;
    }
    
}