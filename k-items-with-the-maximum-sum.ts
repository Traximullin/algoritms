{
    function kItemsWithMaximumSum(numOnes: number, numZeros: number, numNegOnes: number, k: number): number {
        if(k <= numOnes)
            return k;

        if(k > numOnes && k <= numOnes + numZeros)
            return numOnes;

        return numOnes - (k-numOnes - numZeros);
    };
}