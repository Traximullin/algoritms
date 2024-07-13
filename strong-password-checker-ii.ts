{
    function strongPasswordCheckerII(password: string): boolean {
        if (password.length < 8) {
            return false
        }

        const specials = new Set('!@#$%^&*()-+');

        const rules = {
            'one_lower': false,
            'one_uppercase': false,
            'one_number': false,
            'one_special': false,
        }

        for (let i = 0; i < password.length; i++) {
            if (password[i] === password[i + 1])
                return false

            const value_code = password.charCodeAt(i);

            if (value_code >= 65 && value_code <= 90) 
                rules.one_uppercase = true

            if (value_code >= 97 && value_code <= 122)
                rules.one_lower = true

            if (value_code >= 48 && value_code <= 57)
                rules.one_number = true

            if (specials.has(password[i])) 
                rules.one_special = true

        }
        
        return Object.values(rules).every(Boolean)
    };

    console.log(strongPasswordCheckerII("&3@396+&532#1)5^*^*56$269)(-54(3)7&)@1^)8)(@*@23#-%3189)45+6&8%0756!6+!+6"))
}