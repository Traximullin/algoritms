{
    function maximumPopulation(logs: number[][]): number {
        const map = new Map();

        for (let i = 0; i < logs.length; i++) {
            map.set([logs[i][0], logs[i][1]], 0);
        }

        for (let i = 0; i < logs.length; i++) {
            const [birth, deatch] = logs[i];

            for (const [key] of map.entries()) {
                const [birth_key, deatch_key] = key;
                console.log(birth)
                console.log(birth_key)
                
            }
        }

        console.log(map)

    };

    console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]]))
}