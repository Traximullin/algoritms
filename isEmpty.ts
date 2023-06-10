
const isEmpty = function(obj) {
    // return Object.values(obj).length === 0
    // return Object.keys(obj).length === 0
    // return JSON.stringify(obj).length === 2
    if(Array.isArray(obj)) {
        return obj.length === 0
    }
    return Object.keys(obj).length === 0
};

console.log(isEmpty({"x": 5, "y": 42}))
console.log(isEmpty([null,false]))
console.log(isEmpty({}))