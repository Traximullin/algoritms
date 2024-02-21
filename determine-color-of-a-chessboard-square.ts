{
    const char = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
    }

    function squareIsWhite(coordinates: string): boolean {
        return (char[coordinates[0]] + +coordinates[1]) % 2 !== 0
    };

    console.log(squareIsWhite('a1'))
    console.log(squareIsWhite('h3'))
    console.log(squareIsWhite('c7'))
}