{
    const isUnivalTree = function(root) {
        const isRightEqual = !root.right || (root.val === root.right.val && isUnivalTree(root.right));
        const isLeftEqual = !root.left || (root.val === root.left.val && isUnivalTree(root.left));

        return isLeftEqual && isRightEqual;
    };
}