{
    const dailyTemperatures = function (temperatures) {
        let r = Array(temperatures.length).fill(0);
        let s = [];
      
        for (const [index, current] of temperatures.entries()) {
          while (
            s.length > 0 &&
            temperatures[s[s.length - 1]] < current
          ) {
            let prev = s.pop();
            r[prev] = index - prev;
          }
        
          s.push(index);
        }
        
        return r;
    };

    console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
    console.log(dailyTemperatures([30,40,50,60]))
}