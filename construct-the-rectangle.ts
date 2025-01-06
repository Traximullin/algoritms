{
    function constructRectangle(area: number): number[] {
        let w = ~~Math.sqrt(area);

        while (area % w !== 0)
            w--;

        return [area / w, w];
    };

    console.log(constructRectangle(122122))
}