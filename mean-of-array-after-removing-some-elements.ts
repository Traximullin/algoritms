{
    function trimMean(arr: number[]): number {
        const five_procent = arr.length * 0.05
        const new_arr = arr.sort((a,b) => a - b).slice(five_procent, -five_procent);

        return new_arr.reduce((prev, next) => prev + next , 0) / new_arr.length
    };

    console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))
}