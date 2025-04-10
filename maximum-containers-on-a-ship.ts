{
    function maxContainers(n: number, w: number, maxWeight: number): number {
        return Math.min(n ** 2, maxWeight / w | 0);
    };

    console.log(maxContainers(2,3, 15))
}