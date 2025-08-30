{
    function combinationSum2(candidates: number[], target: number): number[][] {
        const res: number[][] = [];

        candidates.sort((a, b) => a - b);

        function backtrack(start: number, target: number, path: number[]) {
            if (target === 0) {
                res.push([...path]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1]) continue;

                if (candidates[i] > target) break;

                path.push(candidates[i]);
                backtrack(i + 1, target - candidates[i], path);
                path.pop(); 
            }
        }

        backtrack(0, target, []);
        return res;
    }
}