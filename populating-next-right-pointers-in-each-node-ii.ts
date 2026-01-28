function connect(root: _Node | null): _Node | null {
  if (!root) return root;

  let cur: _Node | null = root;

  while (cur) {
    const dummy = new _Node();
    let nxt: _Node = dummy;

    while (cur) {
      if (cur.left) {
        nxt.next = cur.left;
        nxt = nxt.next;
      }

      if (cur.right) {
        nxt.next = cur.right;
        nxt = nxt.next;
      }

      cur = cur.next;
    }

    cur = dummy.next;
  }

  return root;
}
