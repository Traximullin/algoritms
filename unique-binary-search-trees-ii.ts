function generateTrees(n: number): Array<TreeNode | null> {
    const treeGenerator = (start, end): Array<TreeNode | null> => {
        if (start > end) return [null]

        const trees: TreeNode[] = []

        for (let rootVal = start; rootVal <= end; rootVal++) {
            const lhsSubtrees = treeGenerator(start, rootVal - 1)
            const rhsSubtrees = treeGenerator(rootVal + 1, end)
            for (const lhsSubtree of lhsSubtrees)
                for (const rhsSubtree of rhsSubtrees)
                    trees.push(new TreeNode(rootVal, lhsSubtree, rhsSubtree))
        }
        return trees
    }

    return n === 0 ? [] : treeGenerator(1, n)
}