function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0)
        return true;
    
    for (let i = 0; i < flowerbed.length; i++) {
        const prev_value = flowerbed[i - 1] || 0;
        const next_value = flowerbed[i + 1] || 0;
        const value = flowerbed[i];

        if (prev_value === 0 && next_value === 0 && value === 0) {
            flowerbed[i] = 1;
            n -= 1;
        }

        if (n === 0)
            return true;
    }

    return false;
};


console.log(canPlaceFlowers([0,0,1,0,1], 1))