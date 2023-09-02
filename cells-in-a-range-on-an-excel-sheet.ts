{
    const cellsInRange = function(s) {
        const [fromLetter, fromNum, , toLetter, toNum] = s;
        const result: string[] = [];

        for (let l1 = fromLetter.charCodeAt(0), l2 = toLetter.charCodeAt(0); l1 <= l2; ++l1) {
            for (let n1 = +fromNum, n2 = +toNum; n1 <= n2; ++n1) {
              result.push(String.fromCharCode(l1) + n1);
            }
        }

        return result;
    };

    console.log(cellsInRange("A1:F1"))
}