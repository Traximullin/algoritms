{
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    function intToRoman(num: number): string {
       let r = "";

       for (let i = 0; i < values.length; i++) {
            while (num >= values[i]) {
                r += symbols[i];
                num -= values[i];
            }
       }

       return r;
    };

    console.log(intToRoman(8))
}