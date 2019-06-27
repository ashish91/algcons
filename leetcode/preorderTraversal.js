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
var preorderTraversal = function(root, res = []) {
  if (!root) return res;
  
  res.push(root.val);
  if (root.left) preorderTraversal(root.left, res);
  if (root.right) preorderTraversal(root.right, res);
  
  return res;
};