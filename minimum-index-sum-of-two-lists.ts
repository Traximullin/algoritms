{
    function findRestaurant(list1: string[], list2: string[]): string[] {
        const hash = new Map();
        const hash_2 = new Map();

        for (let i = 0; i < list2.length; i++) {
            const word = list2[i];

            hash.set(word, i);
        }

        for (let i = 0; i < list1.length; i++) {
            const word = list1[i];
            
            if (hash.has(word)) {
                const value = hash.get(word) + i;
                console.log()
                const new_value = [...(hash_2.get(value) || []), word] 

                hash_2.set(value, new_value)
            }

        }

        const min = Math.min(...Array.from(hash_2.keys()));

        return hash_2.get(min)
    };

    console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"]
        , ["KFC","Shogun","Burger King"]
    ))
}