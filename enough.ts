{
    const enough = (cap, on, wait) => (
        Math.max(wait + on - cap, 0)
        // cap >= on + wait 
        //     ? 0
        //     : on + wait - cap
    )

    console.log(enough(10,5,5))
    console.log(enough(100,60, 50))
}