{
    const lang = ['a', 'b', 'c']

    function modifyString(s: string): string {
        const str_arr = Array.from(s);

        for (let i = 0; i < str_arr.length; i++) {
            if (str_arr[i] === '?') {
                const prev = str_arr[i - 1] ? str_arr[i - 1].charCodeAt(0) : 0;
                const next = str_arr[i + 1] ? str_arr[i + 1].charCodeAt(0) : 0;
                const code = next - prev - 1;

                str_arr[i] = code > 0 ? String.fromCharCode(code) : lang.find((elem) => elem !== str_arr[i - 1] && elem !== str_arr[i + 1]);
            }
        }

        return str_arr.join('')
    };

    console.log(modifyString('?zs'))
    console.log(modifyString("ubv?w"

))
}