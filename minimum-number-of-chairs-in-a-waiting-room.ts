{
    function minimumChairs(s: string): number {
        let c = 0,
            max = 0;

        for (const person of s) {

            if (person === 'E') {
                c += 1;
                if (c > max) 
                    max = c
            }
            else 
                c -= 1;
        
        }

        return max;
    };

    console.log("EEEEEEEEE")
}