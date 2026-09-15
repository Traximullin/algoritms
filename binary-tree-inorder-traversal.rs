use std::cell::RefCell;
use std::rc::Rc;

pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut res = vec![];

    fn traversal(node: Option<Rc<RefCell<TreeNode>>>, res: &mut Vec<i32>) {
        if let Some(n) = node {
            traversal(n.borrow().left.clone(), res);
            res.push(n.borrow().val);
            traversal(n.borrow().right.clone(), res);
        }
    }

    traversal(root, &mut res);

    res
}
