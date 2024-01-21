{
    var sumSubarrayMins = function(arr) {
        let mod = Math.pow(10, 9) + 7;
        let stack = [];
        let sum = 0;
        for (let i = 0; i <= arr.length; i++) {
            while (stack.length > 0 && (i === arr.length || arr[i] < arr[stack[stack.length - 1]])) {
                let j = stack.pop();
                sum = (sum + arr[j] * (i - j) * (j - (stack.length > 0 ? stack[stack.length - 1] : -1))) % mod;
            }
            stack.push(i);
        }
        return sum;
    };
}