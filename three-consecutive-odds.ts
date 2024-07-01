{
    const helper = (num: number) => {
        return num % 2 !== 0 
    }   

    function threeConsecutiveOdds(arr: number[]): boolean {
        
        for (let i = 2; i < arr.length; i++) {

            if (helper(arr[i]) && helper(arr[i - 1]) && helper(arr[i - 2]))
                return true

        }

        return false
    };

    console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))
}