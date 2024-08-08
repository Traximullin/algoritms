{
    function addSpaces(s: string, spaces: number[]): string {
        let result = "";
        let current_spaces = 0;

        for (let i = 0; i < s.length; i++) {
            if (spaces[current_spaces] === i) {
                result += ` ${s[i]}`
                current_spaces += 1;
            } else {
                result += s[i]
            }
        }

        return result
    };
    console.log(addSpaces('LeetcodeHelpsMeLearn', [8,13,15]))

}