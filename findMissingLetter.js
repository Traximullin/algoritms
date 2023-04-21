const array = ['a','b','c','d','f']

function findMissingLetter(array) {
    array.forEach((element,index) => {
        if(index !== 0 && index !== array.length - 1) {
            if(array[index].charCodeAt() + 1 !== array[index + 1].charCodeAt()) {
                return String.fromCharCode(array[index].charCodeAt() + 1)
            }    
        }
    });
}

findMissingLetter(array)
