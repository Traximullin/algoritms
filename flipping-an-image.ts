{
    function flipAndInvertImage(image: number[][]): number[][] {
        return image.map(img => (
            img.reverse().map(i => i ^ 1)
        ))
    };
}