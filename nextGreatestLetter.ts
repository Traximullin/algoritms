{
    const nextGreatestLetter = function(letters, target) {

        return letters.find(sym => sym.charCodeAt() > target.charCodeAt()) 
        || letters.find(sym => sym.charCodeAt() < target.charCodeAt())
    }

    console.log(nextGreatestLetter(["x","x","y","y"],"z"))
}