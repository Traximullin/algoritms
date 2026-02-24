use std::cell::RefCell;
use std::rc::Rc;
type OptNode = Option<Rc<RefCell<TreeNode>>>;

pub fn sum_root_to_leaf(root: OptNode) -> i32 {
    Self::find_sum(&root, 0)
}

fn find_sum(node: &OptNode, acc: i32) -> i32 {
    match node.as_ref() {
        None => 0,
        Some(n) => {
            let b = n.borrow();
            let acc2 = (acc << 1) | b.val;
            let l_r = Self::find_sum(&b.left, acc2) + Self::find_sum(&b.right, acc2);
            if l_r == 0 {
                acc2
            } else {
                l_r
            }
        }
    }
}
