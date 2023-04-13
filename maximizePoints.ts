
type team = number[]

const helper = (array: team, number: number) => {
    const current_element = array.findIndex((element) => element > number)

    if(current_element >= 0) {
        array.splice(current_element,1)
        return true
    }

    return false
}

const maximizePoints =  (team1: team, team2: team): number =>  {
    const new_team = team1.sort((a,b) => a - b)
    let count = 0;

    team2.sort((a,b) => a - b).forEach(elem => {
        if(helper(new_team,elem)) {
            count++
        } 
    })

    return count
}

// clever 
// function maximizePoints(team1, team2) {
//     var t1=team1.slice().sort((a,b)=>a-b);
//     var t2=team2.slice().sort((a,b)=>a-b);
//     for (var c=0,j=0,i=0;i<t1.length;i++,j++) if (t1[i]>t2[j]) c++; else j--; 
//     return c
// }