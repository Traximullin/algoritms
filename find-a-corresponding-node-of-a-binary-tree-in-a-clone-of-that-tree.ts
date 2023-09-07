{
    const getTargetCopy = function(original, cloned, target) {
        
        const traverse = (oNode, cNode) => {
            if(!oNode) return;

            if(oNode === target) return cNode;
            
            return traverse(oNode.left, cNode.left) || traverse(oNode.right, cNode.right);
        }

        return traverse(original, cloned);
    };


}