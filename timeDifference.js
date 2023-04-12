const arr = ["1:10pm", "4:40am", "5:00pm"]
const arr1 = ["10:00am", "11:45pm", "5:00am", "12:01am","12:01pm"]

const timeDifference = (array) => {
    const normalTime = []
    let time;
        
    array.forEach(element => {
        time = element.slice(0,-2)
        
        if(element.slice(-2) === 'pm') {
        
            if(time.slice(0,2) == 12) {
                normalTime.push(12 * 60 + +time.slice(-2))
            }else {
                normalTime.push((+time.slice(0,-3) + 12) * 60 + +time.slice(-2))
            }
            
        }else{
        
            if(time.slice(0,2) == 12) {
                normalTime.push(24 * 60 + +time.slice(-2))
            }else {
                normalTime.push(time.slice(0,-3) * 60 + + time.slice(-2))
            }
        
        }
    });
    const sorting = normalTime.sort((a,b) => {
        return b - a
    })
    
    return sorting[0] - sorting[1]
}

console.log(timeDifference(arr))
console.log(timeDifference(arr1))