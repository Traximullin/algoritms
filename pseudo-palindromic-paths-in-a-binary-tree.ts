{
    var pseudoPalindromicPaths = function (root) {
        let a = 0;
        let b = [[root, 0]];
        while (b.length > 0) {
            let [node, path] = b.pop();
            if (node !== null) {
                path ^= 1 << node.val;
                if (node.left === null && node.right === null) {
                    if ((path & (path - 1)) === 0) {
                        a += 1;
                    }
                } else {
                    b.push([node.right, path]);
                    b.push([node.left, path]);
                }
            }
        }
        return a;
    };
}