// A: 30
// B: 20
// C: 10 
// D: 5

const TEST = {
    A: 30,
    B: 20,
    C: 10,
    D: 5
}

function findHack(arr) {
   const res = []
    arr.forEach(elem => {
        let [name, score, list] = elem

        if(score > 200) {
            res.push(name)
            return 
        } 

        list = list.map(elem => TEST[elem] ? TEST[elem] : 0)

        if(Math.min(...list) >= TEST.B && list.length >= 5) {
            list.push(20)
        }


        let point = list.reduce((prev,count) => prev + count, 0)

        if(point > 200) point = 200

        score !== point 
            &&
        res.push(name)
    })

    return res
}

var array = [
    // ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    // ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A","A"]],
    // ["name4", 140, ["B", "A", "A", "C", "A"]]
];


console.log(findHack(array))
    