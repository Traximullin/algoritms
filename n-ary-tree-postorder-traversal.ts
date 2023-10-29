{
    const postorder = function(root, arr = []) {
        if (!root) 
            return []

        for (let child of root.children) {
            postorder(child, arr)
        }
        arr.push(root.val)

        return arr;
    };


}