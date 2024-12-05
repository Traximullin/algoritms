{
    function canChange(start: string, target: string): boolean {
        if (start.replaceAll("_", '') !== target.replaceAll("_", ''))
            return false;
        
        let first = 0;
        let two = 0;

        while (two < target.length) {
            if (target[two] === '_') {
                two += 1;
                continue;
            }
            if (start[first] === '_') {
                first += 1;
                continue;
            }

            if (start[first] === target[two]) {
                if (start[first] === "R" && first > two) {
                    return false
                }

                if (start[first] === 'L' && first < two) {
                    return false
                }

                first += 1;
                two += 1;
            } else {
                return false;
            }
        }

        return true;
    };
    // console.log(canChange('_L__R__R_', 'L______RR'))
    console.log(canChange("_LL__R__R_", 'L___L___RR'))
    // console.log(canChange('_R', 'R_'))
}