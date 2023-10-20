{
    const sumOfLeftLeaves = function(root) {
        let sum = 0, res =[];
        function inorder(node, isLeft=false){
            if(!node)   return null;
    
            inorder(node.left,true);
            if(node.left === null && node.right === null && isLeft){
                sum = sum+ node.val;
            }
            inorder(node.right)
        }
        inorder(root);
        return sum;
    };
}