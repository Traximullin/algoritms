{
    /*
        !SEE
        https://leetcode.com/problems/goal-parser-interpretation/description/
    */
    const keyInter = {
        "G": "G",
        "()": "o",
        "(al)": "al"
    }

    const interpret = function(command) {
        return command.replaceAll('()', 'o').replaceAll('(al)', 'al');

        for(let inter of Object.keys(keyInter)) {
            command = command.replaceAll(inter, keyInter[inter])
        }

        return command
    };

    console.log(interpret("G()(al)"))
}