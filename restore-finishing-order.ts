{
    function recoverOrder(order: number[], friends: number[]): number[] {
        const set = new Set(friends);

        const result = [];

        for(const ord of order)
            if (set.has(ord))
                result.push(ord);
        
        return result;
    };

    console.log(recoverOrder([3,1,2,5,4], [1,3,4]))
}