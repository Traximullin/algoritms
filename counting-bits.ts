{
    const countBits = function(n) {
        let res = [0]
        
        for(let i=1;i<n+1;i++){
          if(i % 2 === 0){
            res.push(res[~~(i/2)])
          } else {
            res.push(res[~~(i/2)]+1)
          }
        }

        return res
    };

    console.log(countBits(2))
}