{
    function levelOrderBottom(root: TreeNode | null): number[][] {
        const res: number[][] = [];
        traversal(root, 1);

        function traversal(root: TreeNode | null, height: number) {
            if (root != null) {
                if (res.length < height) {
                    res.push([]);
                }

                const temp: number[] = res[height-1];
                temp.push(root.val);
                traversal(root.left, height+1);
                traversal(root.right, height+1);
            }
        }

        return res.reverse();
    };
}