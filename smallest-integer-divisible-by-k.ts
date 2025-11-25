{
    function smallestRepunitDivByK(k: number) {
        for (let i = 1, r = 0; i <= k; i++) {
            r = (r * 10 + 1) % k;
            if (!r) return i;
        }

        return -1;
    }
}