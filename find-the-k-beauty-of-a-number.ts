{
    function divisorSubstrings(num: number, k: number): number {
        const str = num.toString();
        let с = 0;
    
        for (let i = 0; i <= str.length - k; i++) { 
            const substring = str.slice(i, i + k);
            const diff = parseInt(substring, 10);
    
            if (diff !== 0 && num % diff === 0) 
                с++;
        }
    
        return с;
    }

    console.log(divisorSubstrings(30003, 3))
}