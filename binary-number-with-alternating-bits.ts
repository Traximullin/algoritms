{
    function hasAlternatingBits(n: number): boolean {
        let str = n.toString(2);

        if (str.length <= 2) 
            str += '1';

        for (let i = 1; i < str.length - 1; i++) {
            if (str[i - 1] == str[i] || str[i + 1] == str[i])
                return false
        }
        return true;
    };

    console.log(hasAlternatingBits(2))
}