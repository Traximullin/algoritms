function countPermutations(complexity: number[]): number {
    const firstComplexityNumber = complexity[0];
    let isPossibleUlockedAllComputers = true;

    for (let i = 1; i < complexity.length; i++) {
        if (firstComplexityNumber >= complexity[i]) {
            isPossibleUlockedAllComputers = false;
            break;
        }
    }

    if (isPossibleUlockedAllComputers) {
        const getFactorial = (n): number => {
            let factorialRes = 1;
            for (let i = 2; i <= n - 1; i++) {
                factorialRes = factorialRes * i % 1_000_000_007; 
            }

            return factorialRes;
        }

        return getFactorial(complexity.length);
    } else {
        return 0;
    }
};