{
    const findSpecialInteger = function(arr) {
        if(arr.length === 1) {
            return arr[0]
        }

        let count = 1;

        for(let i = 0; i < arr.length; i++) {
            let int = arr[i]
            
            if (int == arr[i + 1])
                count += 1
            else 
                count = 1
            if (count > arr.length / 4) 
                return int
        }

    };

    console.log(findSpecialInteger([1,2,3,4,5,6,7,8,9,10,11,12,12,12,12]))
}