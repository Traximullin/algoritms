const bouncingBall = (h: number,  bounce: number,  window: number) => {
    let res = -1
    
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return res
    }
    

    do {
        h = h * bounce
        res += 2
    } while (h > window)
    
    return res
}

console.log(bouncingBall(3.0, 0.66, 1.5))
console.log(bouncingBall(30.0, 0.66, 1.5))
console.log(bouncingBall(1, 1, 1.5))