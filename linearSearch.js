const arr = [1,2,3,4,5,6,7,8,9,10]

const linearSearch = (arr,target) => {
    let count = 0
    
    for(let i = 0;i < arr.length; i++) {
        count++
        
        if(arr[i] === target) {
            return `Индекс ${i}, кол-во итерация ${count}`
        }
        
    }
    
    return null
}


console.log(linearSearch(arr,8))