/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, res = []) {
  if (!root) return res;

  if (root.left) inorderTraversal(root.left, res);
  res.push(root.val);
  if (root.right) inorderTraversal(root.right, res);

  return res;
};