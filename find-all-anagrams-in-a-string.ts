{
    function findAnagrams(s: string, p: string): number[] {
        let ans: number[] = [];
        let hash: number[] = new Array(26).fill(0);
        let pHash: number[] = new Array(26).fill(0);

        if (s.length < p.length) return ans;

        let left: number = 0;
        let right: number = 0;

        while (right < p.length) {
            pHash[p.charCodeAt(right) - 97] += 1;
            hash[s.charCodeAt(right) - 97] += 1;
            right++;
        }

        right -= 1;

        while (right < s.length) {
            if (JSON.stringify(pHash) == JSON.stringify(hash))
                ans.push(left);
            right += 1;
            if (right !== s.length) hash[s.charCodeAt(right) - 97] += 1;
            hash[s.charCodeAt(left) - 97] -= 1;
            left++;
        }
        return ans;
    };

    function findAnagrams(s: string, p: string): number[] {
        const m = new Map();
        const r= [];

        for (const c of p) {
            m.set(c, (m.get(c) || 0) + 1)
        }

        for (let i = 0; i <= s.length - p.length; i += 1) {
            const m_s = new Map();

            for (let j = i; j < p.length + i; j++) {
                const c = s[j];
                m_s.set(c, (m_s.get(c) || 0) + 1)
            }
            
            let isAnagram = true;

            for (const [key, val] of m) {
                if (m_s.get(key) !== val) {
                    isAnagram = false;
                    break;
                }
            }

            if (isAnagram && m_s.size === m.size) {
                r.push(i);
            }
        }

        return r;
    };

    console.log(findAnagrams("cbabacd", "abc"))
}