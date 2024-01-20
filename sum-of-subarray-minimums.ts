{
    var sumSubarrayMins = function (a) {
        const MOD = 1e9 + 7;
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
          let small = a[i];
          for (let j = i; j < a.length; j++) {
            small = Math.min(small, a[j]);
            sum += small;
          }
        }
      
        return sum % MOD;
      };
}