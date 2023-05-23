{
    const flat = function (arr, n) {
        for(let i = 0; i < n; i++) {
            for(let j = 0;j < arr.length; j++) {
                if(Array.isArray(arr[j])) {
                    const offset = arr[j]
                    arr.splice(j,1, ...offset)
                    j += offset.length - 1;
                }
            }
        }
        return arr
    };
    
    let arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]
    console.log(flat(arr,1))
}