const solution = (s: number, t: number) => {
    const sprint = Array(t).fill(s)
    let result = 0

    sprint.forEach((elem,index) => {
        if(index + 1 !== sprint.length) {
            result += elem
        }
        else {
            result += elem * 2
        }
    })

    return result
}

console.log(solution(2,4))