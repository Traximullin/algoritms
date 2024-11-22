{
    function checkIfExist(arr: number[]): boolean {
        const set = new Set(arr);

        for (let i = 0; i < arr.length; i++) {
            const num = arr[i];
            const search_value = num * 2;

            if (set.has(search_value)) {
                
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j] === search_value && j !== i) {
                        return true;
                    } 
                }

            }
            
        }

        return false;
    };

    console.log(checkIfExist([-2,0,10,-19,4,6,-8]))
}