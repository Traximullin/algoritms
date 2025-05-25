{
    const chars = {
        z: 'zero',
        w: 'two',
        u: 'four',
        x: 'six',
        g: "eigth", 
    }

    const chars_numbers = {
        z: 0,
        w: 2,
        u: 4,
        x: 6,
        g: 8,
    }
    

    function originalDigits(s: string): string {
        const s_arr = s.split("");
        const r = [];

        for (let i = 0; i < s_arr.length; i++) {
            const char = chars[s_arr[i]];

            if (char) {
                r.push(chars_numbers[s_arr[i]])
            }
        }
        console.log(r)
    };

    console.log(originalDigits("owoztneoer"))
}