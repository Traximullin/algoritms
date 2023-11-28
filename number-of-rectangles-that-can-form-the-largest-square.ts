{
    const countGoodRectangles = function(rectangles) {
        let arr = [0]

        rectangles.forEach(el => {
            const a = el[0] < el[1] ? el[0] : el[1]
            
            if (a == arr[0]) 
                arr.push(a)
            else if(a > arr[0]) 
                arr = [a] 
        })

        return arr.length
    };
}