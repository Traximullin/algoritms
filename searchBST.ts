{
   function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    // var searchBST = function(root, val) {
    //     if (root === null || root.val === val) {
    //         return root
    //     }

    //     if (val < root.val) {
    //         return searchBST(root.left, val)
    //     } else {
    //         return searchBST(root.right, val)
    //     }
    // };

    const searchBST = function(root, val) {
        while(root !== null) {
            if ( val < root.val ) root = root.left;
            else if ( val > root.val ) root = root.right;
            else return root;
        }
        
        return root
    };

    const node2 = new TreeNode(2,1,3);
    const node1 = new TreeNode(4,node2,7);
    console.log(searchBST(node1,2))

}