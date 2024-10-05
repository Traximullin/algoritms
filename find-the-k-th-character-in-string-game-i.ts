{
    function kthCharacter(k: number): string {
        return String.fromCharCode((k - 1).toString(2).split('1').length + 96);
    };
}