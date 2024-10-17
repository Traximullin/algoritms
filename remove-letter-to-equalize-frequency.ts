{
    function allEqualOrZero(array: number[]) {
        const firstNonZero = array.find(item => item !== 0);

        return array.every(item => item === 0 || item === firstNonZero);
    }

    function equalFrequency(word: string): boolean {
        let array = new Array<number>(26).fill(0);

        for (const char of word) {
            array[char.charCodeAt(0) - 97] += 1;
        }

        array = array.filter(Number);

        for (let i = 0; i < array.length; i++) {
            const copy_array = new Array(...array);

            copy_array[i] = array[i] - 1;

            const flag = allEqualOrZero(copy_array);

            if (flag)
                return true
        }

        return false;
    };

    console.log(equalFrequency("bac"))
}