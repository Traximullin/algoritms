{
    function minAddToMakeValid(s: string): number {
        let open, c;
        open = c = 0;

        for (const char of s) {
            if (char === "(") 
                open += 1;
            else if (char === ')' && open > 0) 
                open -= 1;
            else 
                c += 1;

        }

        
        return open + c
    };

    console.log(minAddToMakeValid("()))(("))
    // console.log(minAddToMakeValid("((("))
}