{
    const countSegments = function(s) {
        const res = [];
        const arr = s.split(' ');

        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
               res.push(arr[i]);
            }
        }

        return res.length;
    };

    console.log(countSegments("Of all the gin joints in all the towns in all the world,   "))
}