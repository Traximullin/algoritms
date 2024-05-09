{
    function maximumHappinessSum(happiness: number[], k: number): number {
        happiness = happiness.sort((a,b) => a - b)
        let c = 0;

        for (let i = 0; i < k; i++) {
            const value = (happiness?.pop() || 1) - i;

            c += value < 0 ? 0 : value
        }
        

        return c;
    };

    console.log(maximumHappinessSum([1,2,3], 2))
}