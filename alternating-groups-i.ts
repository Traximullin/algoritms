{
    function numberOfAlternatingGroups(colors: number[]): number {
        let c = 0;

        colors.push(colors[0]);
        colors.push(colors[1]);

        for (let i = 0; i <= colors.length - 3; i++)  {
            const [first, mid, last] = colors.slice(i, i + 3);

            if (first == last && first != mid) 
                c++;
        }

        return c;
    };

    console.log(numberOfAlternatingGroups([0,1,0,0,1]));

}