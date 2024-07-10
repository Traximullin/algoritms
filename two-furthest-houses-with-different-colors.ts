{
    function maxDistance(colors: number[]): number {
        let max = 0;


        for (let i = 0; i < colors.length; i++) {
            const current = colors[i];
            let c = 0;

            for (let j = i + 1; j < colors.length; j++) {
                const next = colors[j];
                c += 1;

                if (next !== current && max < c)
                    max = j - i

            }

        }

        return max 
    };

    console.log(maxDistance([ 1 ,1,1, 6 ,1,1,1]))
}