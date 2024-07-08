{
    function getEncryptedString(s: string, k: number): string {
        const len = s.length;
        let r = '';

        for (let i = 0; i < s.length; i++) {
            r += s[(i + k) % len]
        }

        return r
    };

    console.log(getEncryptedString("dart", 3))
}