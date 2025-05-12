{
    function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const colorToFeel = image[sr][sc];

    if (colorToFeel === color) {
        return image;
    }
    
    const filled = new Set();

    const floodHelper = (x: number, y:number) => {
        if (image[x][y] === colorToFeel && !filled.has(`${x}${y}`)) {
            image[x][y] = color;
            filled.add(`${x}${y}`);

            if (x - 1 >= 0) floodHelper(x - 1, y);
            if (x + 1 < image.length) floodHelper(x + 1, y);
            if (y - 1 >= 0) floodHelper(x, y - 1);
            if (y + 1 < image[0].length) floodHelper(x, y + 1);
        }
    };

    floodHelper(sr, sc);
    return image;
};
}