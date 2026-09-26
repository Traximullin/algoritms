function evaluate(s: string, knowledge: string[][]): string {
    const map = new Map<string, string>();

    for (const [key, value] of knowledge) {
        map.set(key, value);
    }

    const result: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '(') {
            result.push(s[i]);
            continue;
        }

        let end = i + 1;

        while (s[end] !== ')') {
            end++;
        }

        const key = s.slice(i + 1, end);

        result.push(map.get(key) ?? '?');

        i = end;
    }

    return result.join('');
}
