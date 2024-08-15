{
    function guessNumber(n: number): number {
        let start = 0, end = n;
      
        while (start < end) {
            const middle = Math.floor((start + end) / 2);
            switch (guess(middle)) {
                case 0:
                    return middle;
                case 1:
                    start = middle + 1;
                    break;
                case -1:
                    end = middle - 1;
                    break;
            }
        }
      
        return end;
    };
}