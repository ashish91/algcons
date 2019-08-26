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
var postorderTraversal = function(root, res = []) {
  if (!root) return res;
  
  if (root.left) postorderTraversal(root.left, res);
  if (root.right) postorderTraversal(root.right, res);
  res.push(root.val);
  
  return res;
};