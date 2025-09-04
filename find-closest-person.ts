{
    const findClosest = (x: number, y: number, z: number): number => 
        Math.abs(x - z) < Math.abs(y - z) ? 1 : Math.abs(x - z) > Math.abs(y - z) ? 2 : 0;
}