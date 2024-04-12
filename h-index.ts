{
    function hIndex(citations: number[]): number {
        return citations.sort((a,b) => b - a).filter((citation, i) => citation > i).length
    };

    console.log(hIndex([3,0,6,1,5]))
}