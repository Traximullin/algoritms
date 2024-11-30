function lastStoneWeight(stones: number[]): number {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a);

        const max_one = stones.shift()!;
        const max_two = stones.shift()!;

        if (max_one !== max_two) 
            stones.push(max_one - max_two);
        
    }

    return stones.length === 1 ? stones[0] : 0;
}

console.log(lastStoneWeight([9,3,2,10]))