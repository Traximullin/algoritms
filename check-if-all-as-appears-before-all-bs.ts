{
    function checkString(s: string): boolean {
        const last_index_a = s.lastIndexOf('a');
        const index_b = s.indexOf('b');

        return index_b === - 1 || last_index_a < index_b
    };
}