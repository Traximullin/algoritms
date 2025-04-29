{
    function smallestNumber(pattern: string): string {
        let c = 1;
        let r = "";

        for (let i = 0; i < pattern.length; i++) {
            console.log(pattern[i])
            if (pattern[i] === "I")
                r += c++;        
            else 
                r += c--;
        }

        return r;
    };

    console.log(smallestNumber("IIIDIDDD"))
}