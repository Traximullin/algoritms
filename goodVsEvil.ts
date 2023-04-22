function goodVsEvil(good: string, evil: string){
    const good_point = Array.from(good,Number).reduce((prev,curr) => prev + curr, 0)
    const evil_point = Array.from(evil, Number).reduce((prev,curr) => prev + curr, 0)

    if(good_point > evil_point) {
        return "Battle Result: Good triumphs over Evil"
    }

    if(evil_point < good_point) {
        return "Battle Result: Evil eradicates all trace of Good"
    }

    return "Battle Result: No victor on this battle field"
}

goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')
