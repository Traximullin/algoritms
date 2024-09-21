{
    function lexicalOrder(n: number): number[] {
        const result: number[] = [];

        for (let i = 1; i <= n; i++) 
            result.push(i);

        return result.sort();
    };

    console.log(lexicalOrder(13))
}