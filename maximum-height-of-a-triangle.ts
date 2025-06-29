{
    function maxHeightOfTriangle(red: number, blue: number): number {
        let output = 0;

        function dfs(a: number, b: number, row = 0) {
            row++;

            if (a - row < 0) {
            return;
            }

            output = Math.max(output, row)
            dfs(b, a - row, row)
        }

        dfs(red, blue);
        dfs(blue, red);

        return output;
    }
}