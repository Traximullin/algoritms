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
    
    function getMinimumDifference(root: TreeNode | null): number {
        const tree_arr: number[] = [];
        let min = Infinity;

        const dfs = (node: TreeNode | null) => {
            if(node === null) {
                return
            }
            dfs(node.left)
            tree_arr.push(node.val)
            dfs(node.right)
            
        }

        dfs(root)

        for(let i = 1; i < tree_arr.length; i++) {
            min = Math.min(min, tree_arr[i] - tree_arr[i - 1])
        }

        
        return min
    };


    const arr = [ 1, 2, 3, 4, 6 ]



    console.log(min)

}