const goodStruct = {
    0: 1,
    1: 2,
    2: 3,
    3: 3,
    4: 4,
    5: 10
}

const evitStruct = {
    0: 1,
    1: 2,
    2: 2,
    3: 2,
    4: 3,
    5: 5,
    6: 10
}

const teamPoint = (string: string, struct: any): number => {
    const array_string = Array.from(string.split(" ")).map((elem, index) => 
        elem !== "0" ? elem += struct[index] : elem
    )

    return Array.from(array_string, Number).reduce((prev,curr) => prev + curr, 0)
}

function goodVsEvil(good: string, evil: string){
    const good_point = teamPoint(good, goodStruct)
    const evil_point = teamPoint(evil, evitStruct)

    if(good_point > evil_point) {
        return "Battle Result: Good triumphs over Evil"
    }

    if(evil_point > good_point) {
        return "Battle Result: Evil eradicates all trace of Good"
    }

    return "Battle Result: No victor on this battle field"
}

// console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))