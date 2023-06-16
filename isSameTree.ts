{
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val) 
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    const isSameTree = function(p, q) {
        return JSON.stringify(p) === JSON.stringify(q)
    };


    const test_one = new TreeNode()
    const test_two = new TreeNode(0)

    console.log(isSameTree(test_one, test_two))

    console.log(test_one)
    console.log(test_two)
}