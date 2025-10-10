{
    function maximumEnergy(energy: number[], k: number): number {
        let result = -1000;

        for (let i = energy.length - k; i < energy.length; i++) {
            let sum = 0;
            for (let j = i; j >= 0; j -= k) {
                sum += energy[j];
                if (result < sum) result = sum
            }
        }

        return result;
    };
}