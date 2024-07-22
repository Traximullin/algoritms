{
    function thousandSeparator(n: number): string {
        const num = n.toString().split("").reverse()
    
        const result = [];
    
        for (let i = 0; i < num.length; i++) {
            if (i % 3 == 0 && i !== 0) 
                result.push(".")

            result.push(num[i])
        }

        return result.reverse().join("")
    };

    console.log(thousandSeparator(1234))
}