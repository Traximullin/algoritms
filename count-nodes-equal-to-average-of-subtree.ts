{
     class TreeNode {
         val: number
         left: TreeNode | null
         right: TreeNode | null
         constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.left = (left===undefined ? null : left)
             this.right = (right===undefined ? null : right)
         }
    }

    function averageOfSubtree(root: TreeNode | null): number {
        let result = 0;

        const dfs = (node: TreeNode | null) => {
            if(!node) {
                return {count: 0, sum: 0}
            }

            const leftResult = dfs(node?.left)
            const rightResult = dfs(node?.right)

            const totalCount = leftResult?.count + rightResult?.count + 1
            const totalSum = leftResult?.sum + rightResult?.sum + node.val
            const average = ~~(totalSum / totalCount)

            if (average === node.val) 
                result += 1

            return {
                count: totalCount,
                sum: totalSum
            }
        }

        dfs(root)

        return result

    };

    const test = new TreeNode(
        4,
        new TreeNode(8, new TreeNode(0), new TreeNode(1)),
        new TreeNode(5, null, new TreeNode(6))
    )

    console.log(averageOfSubtree(test))
}