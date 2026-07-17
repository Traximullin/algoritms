use std::cell::RefCell;
use std::rc::Rc;

pub fn flatten(root: &mut Option<Rc<RefCell<TreeNode>>>) {
    let mut stack = std::iter::once(root.clone()).flatten().collect::<Vec<_>>();
    let mut head = Rc::new(RefCell::new(TreeNode::new(0)));

    while let Some(node) = stack.pop() {
        let mut node_ref = node.borrow_mut();
        if let Some(right) = node_ref.right.take() {
            stack.push(right);
        }
        if let Some(left) = node_ref.left.take() {
            stack.push(left);
        }

        drop(node_ref);
        head.borrow_mut().right = Some(node.clone());
        head = node;
    }
}
