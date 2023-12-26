{
    const numRollsToTarget = function(n, k, target, memo = new Map()) {
        if(n === 0 && target === 0) {
            return 1
        }
        if(n === 0 || target <= 0) {
            return 0
        }
        if(memo.has(`${n}-${target}`)) {
            return memo.get(`${n}-${target}`);
        }
        let count = 0,
            m = Math.pow(10, 9) + 7
        
        for(let i = 1; i <= k; i++) {
            count = (count + numRollsToTarget(n-1, k, target - i, memo)) % m;
        }

        memo.set(`${n}-${target}`, count);

        return count
    };

    console.log(numRollsToTarget(30, 30, 500))
}