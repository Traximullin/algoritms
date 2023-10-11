{
    const isBalanced = function(root) {
        let flag = true;

        const getHeights = (node, height) => {
            if (!node) {
                return 0;
            }

            const left_height  = getHeights(node.left, height + 1);
            const right_height = getHeights(node.right, height + 1);

            if (Math.abs(right_height - left_height) > 1) {
                flag = false;
            }
    
            return Math.max(left_height, right_height) + 1;
        };
        
        getHeights(root, 0);

        return flag;
    };
}