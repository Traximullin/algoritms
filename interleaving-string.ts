{
    const memo = new Map<string, boolean>();

    function isInterleave(s1: string, s2: string, s3: string): boolean {
        if (!s1 && !s2 && !s3) return true;
        if (!s3) return false;

        const k = `${s1}//${s2}//${s3}`;
        if (memo.has(k)) return memo.get(k)!;

        const c = s3[0];
        const tryS1 = s1[0] === c ? isInterleave(s1.substring(1), s2, s3.substring(1)) : false;
        const tryS2 = s2[0] === c ? isInterleave(s1, s2.substring(1), s3.substring(1)) : false;

        memo.set(k, tryS1 || tryS2);
        return tryS1 || tryS2;
    }

}