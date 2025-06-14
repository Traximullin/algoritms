{
    function minMaxDifference(num: number): number {
        const replaceFirstTo = (to) => {
            const digs = Array.from(String(num), d => Number(d));
            let arr = [...digs];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== to) {
                    const target = arr[i];
                    arr = arr.map(d => d === target ? to : d);
                    break;
                }
            }

            return Number(arr.join(''));
        }

        return replaceFirstTo(9) - replaceFirstTo(0);
    }
}