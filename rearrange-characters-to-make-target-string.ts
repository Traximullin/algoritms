{
    function rearrangeCharacters(s: string, target: string): number {
        
        const map_s = new Map();

        for (const char of s) {
            const new_value = (map_s.get(char) || 0) + 1;

            map_s.set(char, new_value);
        }

        const map_target = new Map();

        for (const char of target) {
            const new_value = (map_target.get(char) || 0) + 1;

            map_target.set(char, new_value);
        }

        let min = Infinity;

        for (const [key, value] of map_target.entries()) {
            if (!map_s.get(key))
                return 0
        
            const value_key = ~~(map_s.get(key) / value);

            if (min > value_key)
                min = value_key;
        } 

        return min;
    };

    console.log(rearrangeCharacters("aaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaa"))
}