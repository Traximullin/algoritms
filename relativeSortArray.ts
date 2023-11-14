{
    const relativeSortArray = function(arr1, arr2) {
        const map = new Map();

        for(let i = 0; i < arr2.length; i++) {
            map.set(arr2[i], i)
        }

        return arr1
            .sort((a,b) => 
                (!map.has(a) ? arr1.length + a : map.get(a)) - (!map.has(b) ? arr1.length + b : map.get(b))
            );
    };

    console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
}