{
    function waterbombs(fire, w) {
        let result = 0

        fire.split("Y").forEach(elem => {
            result += Math.ceil(elem.length / w)
        })

        return result
    } 

    console.log(waterbombs("xxYxx",2))
}