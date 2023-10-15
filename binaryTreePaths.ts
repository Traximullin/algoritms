{
    const binaryTreePaths = function(root) {
        if (root === null) 
            return [];
        
        else if (root.left === null && root.right === null) 
            return [`${root.val}`];
        
        else {
            const left = binaryTreePaths(root.left).map(x => root.val + '->' + x);
            const right = binaryTreePaths(root.right).map(x => root.val + '->' + x);
            
            return [...left, ...right];
        }
    };
}