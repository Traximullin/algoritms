
const findUniq = (numbers: number[]) => {
    return numbers.filter((el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el))[0]
}

  