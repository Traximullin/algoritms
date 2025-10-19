{
    function aOperation(s: string, a: number): string {
        let res = '';

        for (let i = 0; i < s.length; i++) {
            if (i % 2 == 0) {
                res += s[i];
                continue;
            }

            const idx = s.charCodeAt(i) - '0'.charCodeAt(0);
            res += String.fromCharCode(((idx + a) % 10) + '0'.charCodeAt(0));
        }

        return res;
    }

    function bOperation(s: string, b: number): string {
        let res = '';

        for (let i = 0; i < s.length; i++) {
            res += s[(i + b) % s.length];
        }

        return res;
    }

    function findLexSmallestString(s: string, a: number, b: number): string {
        const visited = new Set<string>();
        let curr = new Set<string>();

        visited.add(s); curr.add(s);

        while (curr.size) {
            const next = new Set<string>();

            for (const c of curr) {
                const aString = aOperation(c, a);
                const bString = bOperation(c, b);

                if (!visited.has(aString)) next.add(aString);
                if (!visited.has(bString)) next.add(bString);
            }

            for (const c of next) visited.add(c);

            curr = next;
        }

        let min = s;
        for (const c of visited) {
            if (c < min) min = c;
        }

        return min;
    };
}