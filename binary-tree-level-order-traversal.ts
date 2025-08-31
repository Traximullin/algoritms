{
    function levelOrder(root: TreeNode | null): number[][] {
        if (root == null) {
            return [];
        }

        let queue: TreeNode[] = [];
        queue.push(root);

        let res: number[][] = [];

        while (queue.length != 0) {
            let level: number[] = [];
            let size: number = queue.length;
            for (let i = 0; i < size; i++) {
                let node: TreeNode = queue.shift();
                level.push(node.val);

                if (node.left != null) {
                    queue.push(node.left);
                }

                if (node.right != null) {
                    queue.push(node.right);
                }
            }
            res.push(level);
        }

        return res;
    };
}