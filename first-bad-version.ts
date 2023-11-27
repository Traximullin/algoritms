{
    var isBadVersion = function(version) {};

    const solution = function(isBadVersion) {
        return function(n) {
            let left = 0,
                mid

            while(n-left > 1){
                mid = ~~((n + left) / 2)

                if(isBadVersion(mid))
                    n = mid
                else 
                    left = mid
            }
            return n
        };
    };
}