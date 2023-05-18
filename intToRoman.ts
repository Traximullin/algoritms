{
    const ROMAN = {
        1: "I",
        5: "V",
        10:"X",
        50:"L",
        100:"C",
        500:"D",
        1000:"M"
    }

    // III - 3  (1 - 3 - 5) - sh 2
    // IIV

    // 58 -> [50,8] -> [L,8] -> 8 > 1 -> 8 > 5 -> 8 < 10 -> 8 > 5 -> [L,V,3] -> 

    const numberSearch = (num: number): number => {
        const ROMAN_ARRAY = Object.keys(ROMAN)

        //@ts-ignore
        return ROMAN_ARRAY.sort((x, y) => Math.abs(num - x) - Math.abs(num - y) )[0]
    }

    const helper = (nums: number): number[] => {
        const result: string[] = []

        const test = 
            nums
            .toString()
            .split("")
            .map((elem,index,self) => 10 ** (self.length - index - 1) * +elem)
        
        

        test.forEach(elem => {
            if(ROMAN.hasOwnProperty(elem)) {
                result.push(ROMAN[elem])
            }else {
                const find = numberSearch(elem)

                result.push(ROMAN[find - elem], ROMAN[find])
            }
        })

        console.log(result)
        return [1]
    }

    const intToRoman = function(num: number) {
        const array = helper(num)
    }

    // console.log(intToRoman(3))
    console.log(intToRoman(1994))

}