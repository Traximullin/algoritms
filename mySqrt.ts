{
    var mySqrt = function(x) {
        let sqrt = 1,
            result = 0
        
        while(sqrt**2 <= x) {
            result = sqrt
            sqrt++
        }

        return result
    };
}