{
    const minOperations = function(logs) {
        let step = 0;

        for (let i = 0; i < logs.length; i++) {
            const log = logs[i];
            if (log === '../') {
                if (step > 0) step--;
            } else if (log !== './') {
                step++;
            }
        }
    
        return step;
    };

    console.log(minOperations(["d1/","d2/","../","d21/","./"]))
}