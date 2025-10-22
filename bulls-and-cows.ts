{
    function getHint(secret: string, guess: string): string {
        let bulls = 0;
        const secretRemainder = new Array<number>(10).fill(0);
        const guessRemainder = new Array<number>(10).fill(0);

        for (let i = 0; i < secret.length; ++i){
            if(secret[i] == guess[i]){
                bulls += 1;
            }
            else {
                secretRemainder[secret[i]] += 1;
                guessRemainder[guess[i]] += 1;
            }
        }

        let cows = 0;
        for (let i = 0; i < 10; ++i) {
            cows += Math.min(secretRemainder[i], guessRemainder[i]);
        }

        return `${bulls}A${cows}B`;
    };
}