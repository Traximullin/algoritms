{
    function digitSum(s: string, k: number): string {
        const getSum = (str: string) => {

            return str.split("").reduce((prev, next) => prev + Number(next), 0).toString();
        }

        const helper = (str: string) => {
            const result: string[] = [];

            for (let i = 0; i < str.length; i += k) {
                result.push(str.slice(i, i + k))
            }
            
            return result.reduce((prev, next) => {
                return prev += getSum(next)
            }, '')
        }

        while (s.length > k) {
            s = helper(s)
            console.log(s)
        }

        return s
    };


    console.log(digitSum('11111222223', 3))
}