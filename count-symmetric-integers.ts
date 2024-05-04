{
    function countSymmetricIntegers(low: number, high: number): number {
        let c = 0;

        for(;low <= high; low++) {
            const char = low.toString();
            const first = char.slice(0, char.length / 2).split("").reduce((a,b) => a + +b , 0)
            const second = char.slice(char.length / 2, char.length).split("").reduce((a,b) => a + +b , 0)
            
            if(char.length % 2 === 0 && first === second) {
                c++
            }
        }

        return c
    };
    
    console.log(countSymmetricIntegers(1,100))
}