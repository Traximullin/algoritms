{
    const isSymmetric = function(root) {
        if(!root.left && !root.right){
            return true;
        }

        const sym = (l,r) => {
            if(!l && !r){
                return true;
            }
            if(!l || !r){
                return false;    
            }
            return l.val==r.val && sym(l.left,r.right) && sym(l.right, r.left);
        }
        return sym(root.left, root.right);
    };
}