const arrayDiffVeryFast = (a: number[], b: number[]) => {
    return a.filter(elem => !b.includes(elem))
}
