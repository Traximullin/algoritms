{
    function divisorSubstrings(num: number, k: number): number {
        const str = num.toString();
        let c = 0;

        for (let i = 0; i < str.length; i++) {
            console.log(str.slice(i,i + k))
            const diff = parseInt(str.slice(i,i + k));
            console.log(diff)
            console.log(num)
            console.log(diff)
            console.log(num % diff)
            if (num % diff === 0)
                c++

        }

        return c;
    };

    console.log(divisorSubstrings(30003, 3))
}