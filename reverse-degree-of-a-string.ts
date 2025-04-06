{
    function reverseDegree(s: string): number {
        return s.split('').reduce((prev ,next, ind) => {
            const b = 26 - (next.charCodeAt(0) - 96) + 1;
            return prev += b * (ind + 1);
        }, 0)
    };
 
    console.log(reverseDegree("abc"))
}