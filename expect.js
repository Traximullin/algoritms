{
    const expect = function(val) {
        return {
            toBe: num => {
                if(num !== val) {
                    throw new Error("Not Equal")
                }
                return num === val
            },
            notToBe: num => {
                if(num === val) {
                    throw new Error("Equal")
                }
                return true
            }
        }
    }
    
    console.log(expect(5).toBe(null))
    console.log(expect(5).notToBe(5))
}