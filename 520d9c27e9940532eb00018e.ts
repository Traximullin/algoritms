{
    function solution(...args){
        const s = new Set();

        for(const arg of args) {
            if(s.has(arg)) {
                return true
            }

            s.add(arg)
        }

        return false
    }

    console.log(solution('a','b','c','a'))
    console.log(solution(1,2,3));
    console.log(solution(solution(1,2,3,'a','b')))
}