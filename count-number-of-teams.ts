{
    function numTeams(rating: number[]): number {
        let c = 0;

        for (let i = 0; i < rating.length; i++) {

            for (let j = i + 1; j < rating.length; j++) {
                const char = rating[i];
                const test = rating[j];
                console.log(char)
                const asc = char < test;

                for (let k = j + 1; k < rating.length; k++) {
                    const t = rating[k]
                    if (asc) {
                      if (test < t) 
                        c++
                    } else {
                      if (test > t) 
                        c++
                    }
            

                }

            }

        }

        return c;
    };

    console.log(numTeams([2,5,3,4,1]))
}