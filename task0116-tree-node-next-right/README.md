# Populating Next Right Pointers in Each Node

\<Medium>

You are given a perfect binary tree where all leaves are on the same level, and
every parent has two children. The binary tree has the following definition:
```c
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next
right node, the next pointer should be set to `NULL`. Initially, all next
pointers are set to `NULL`.

Example:

```
     1                       1          --> NULL
   /   \                  /     \
  2     3              2    -->    3    --> NULL
 / \   / \           /   \       /   \
4   5 6   7         4 --> 5 --> 6 --> 7 --> NULL
```

Explanation: Given the above perfect binary tree, your function should populate
each next pointer to point to its next right node.

Note:
- You may only use constant extra space.
- Recursive approach is fine, implicit stack space does not count as extra space
  for this problem.
