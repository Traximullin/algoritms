{
    const minSteps = function(s, t) {
        const hashMap = new Map();
        let result = 0;

        for(const char of s) {
            const current = (hashMap.get(char) || 0)
            hashMap.set(char, current + 1)
        }

        for(let char of t) {
            if(hashMap.get(char)) {
                const current = (hashMap.get(char) || 0)
                hashMap.set(char, current - 1)
            } else {
                result += 1;
            }

        }

        return result
    };

    console.log(minSteps('bab', 'aba'))   
}