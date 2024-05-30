{
    const minSetSize = function(arr) {
        const map = new Map();
        let length = 0;
        let c = 0;

        for (const num of arr) {
            const new_value = (map.get(num) || 0) + 1
        
            map.set(num, new_value);
        }

        const map_value = Array.from(map.values()).sort((a,b) => a - b);

        while (length < arr.length / 2) {
            c +=1;
            length += map_value.pop();
        }


        return c;
    };

    console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]
    ))
}