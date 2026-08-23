function sumGame(num: string): boolean {
    const n = num.length;
    const half = n / 2;
    let sum1 = 0, sum2 = 0, q1 = 0, q2 = 0;

    for (let i = 0; i < half; i++) {
        if (num[i] === '?') q1++;
        else sum1 += Number(num[i]);
    }

    for (let i = half; i < n; i++) {
        if (num[i] === '?') q2++;
        else sum2 += Number(num[i]);
    }

    const totalQ = q1 + q2;
    if (totalQ % 2 === 1) return true;

    const diff = sum1 - sum2;
    return diff !== (9 * (q2 - q1)) / 2;
}
