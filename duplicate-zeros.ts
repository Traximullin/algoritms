{
    function duplicateZeros(arr: number[]): void {
        const l = arr.length;

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === 0) {
                arr.splice(i, 0, 0)
                i += 1 // loop 
                arr.length -= 1;
            }
        }

    };

    console.log(duplicateZeros([1,0,2,3,0,4,5,0]))
}