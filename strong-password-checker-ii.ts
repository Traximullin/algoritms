{
    const checkSpecial = (str: string) => {
        return str.toLowerCase() === str.toUpperCase()
    }

    const checkNumber = (str: string) => {
        return !isNaN(+str)
    }
    // TODO
    function strongPasswordCheckerII(password: string): boolean {
        if (password.length < 8) {
            return false
        }

        const rules = {
            'one_string': false,
            'one_uppercase': false,
            'one_number': false,
            'one_special': false,
        }

        let start = 0,
            end = password.length - 1;

        while (start < end) {
            if (password[start] === password[end]) {
                return false
            }

            if (password[start] === password[start].toUpperCase() || password[end] === password[end].toUpperCase()) {
                rules.one_uppercase = true
                rules.one_string = true
            }

            if (checkSpecial(password[start]) || checkSpecial(password[end])) {

                if(checkNumber(password[start]) || checkNumber(password[end])) {
                    rules.one_number = true
                } 

                if (!checkNumber(password[end]) || !checkNumber(password[start])) {
                    rules.one_special = true
                }

            }

            if (!rules.one_string) {
                rules.one_string = true
            }
            
            start++ 
            end--
        }

        return Object.values(rules).every(Boolean)
    };

    console.log(strongPasswordCheckerII("Aa1a1a1!"))
}