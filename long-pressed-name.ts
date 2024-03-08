{
    function isLongPressedName(name: string, typed: string): boolean {
        const hash = new Map();

        for(let char of typed) {
            const value = (hash.get(char) || 0) + 1

            hash.set(char, value)
        }

        for(let char of name) {
            const value = (hash.get(char) || 0) - 1

            if(value < 0) {
                return false
            }

            hash.set(char, value)
        }

        return true
    };

    console.log(isLongPressedName('saeed', 'ssaaedd'))
    console.log(isLongPressedName('alex', 'aaleex'))
}