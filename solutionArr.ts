{
    let arr = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]


    const solution = (list: number[]) => {
        const result: number[][] = []
        let count = 0

        list.forEach((elem,index, self) => {
            if(index === self.length - 1) {
                // result[count].at(-1) + 1 === elem 
                result[count][result[count].length - 1] + 1 === elem 
                    ? result[count].push(elem)
                    : result[count + 1] = [elem]
                    return
            }

            if(elem + 1 === self[index + 1]) {

                result[count] === undefined
                    ? result[count] = [elem]
                    : result[count].push(elem)
            }
            else {
                result[count] === undefined
                    ? result[count] = [elem]
                    : result[count].push(elem)
                
                count++
            }
        })

        return result.map((elem,index) => (
            elem.length >= 3
                // ? `${elem[0]}-${elem.at(-1)}`
                ? `${elem[0]}-${elem[elem.length - 1]}`
                : elem.join(",")
        )).join(",")
    }

    console.log(solution(arr))
}