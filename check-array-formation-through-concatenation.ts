{
    function canFormArray(arr: number[], pieces: number[][]): boolean {
        let c = 0;
        let link = 0;

        for (let i = 0; i < pieces.length; i++) {
            console.log(pieces[i])
            for (let j = 0; j < arr.length; j++) {
                console.log(arr[j])
            }

        }
    };

    console.log(canFormArray([91,4,64,78], [[78],[4,64], [91]]))
}