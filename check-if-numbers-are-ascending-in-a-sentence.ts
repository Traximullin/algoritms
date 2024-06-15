{
    function areNumbersAscending(s: string): boolean {
        let prevNumber = 0;

        for (const char of s.split(" ")) {
            
            if (!isNaN(+char)) {
                if (prevNumber < +char) {
                    prevNumber = +char
                } else {
                    return false
                }
            }

        }

        return true
    };

    console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"))
}