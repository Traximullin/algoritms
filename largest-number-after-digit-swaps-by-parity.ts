{
    function largestInteger(num: number): number {
        const nums_1 = [];
        const nums_2 = [];
        const num_str = String(num);

        for (let i = 0; i < num_str.length; i++) 
            if (Number(num_str[i]) % 2 == 0)
                nums_1.push(Number(num_str[i]))
            else 
                nums_2.push(Number(num_str[i]))
 
        nums_1.sort((a,b) => a - b);
        nums_2.sort((a,b) => a - b);

        let r = "";

        for (let i = 0; i < num_str.length; i++) 
            if (Number(num_str[i]) % 2 == 0)
                r += nums_1.pop();
            else 
                r += nums_2.pop();

        return Number(r);
    };


    console.log(largestInteger(1234))
}