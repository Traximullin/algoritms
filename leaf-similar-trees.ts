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

    function getNextLeaf(stack: (TreeNode | null)[]) {
        while (stack.length > 0) {
            const node = stack.pop()
            
            if (node?.right) stack.push(node?.right)
            if (node?.left) stack.push(node?.left)
    
            if (!node?.left && !node?.right) {
                return node?.val
            }
        }
    
        return null
    }
    
    function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
        const stack1: (TreeNode | null)[] = [root1]
        const stack2: (TreeNode | null)[] = [root2]
    
        while (stack1.length > 0 || stack2.length > 0) {
            if (getNextLeaf(stack1) !== getNextLeaf(stack2)) {
                return false
            }
        }
    
        return true
    };
}