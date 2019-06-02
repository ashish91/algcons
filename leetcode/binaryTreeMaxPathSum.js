/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var MIN = -99999999;
var maximumSum = MIN;

var findMax = function(a, b) {
    return a > b ? a : b;
}

var calculateMaxPathSum = function(root) {
    if (!root) {
        return MIN;
    }
    
    var left = MIN, right = MIN;
    if (root.left) {
        left = calculateMaxPathSum(root.left);   
    }
    if (root.right) {
        right = calculateMaxPathSum(root.right);   
    }
    
    // Consider values from left and right 
    var maxLeftRight = null;
    maxLeftRight = findMax(left, right);
    maximumSum = findMax(maximumSum, maxLeftRight + root.val);  
    
    // Path including root     
    maximumSum = findMax(maximumSum, root.val + left + right);

    // Root value is positive and left, right values are negative   
    maximumSum = findMax(maximumSum, root.val);
    
    return findMax(maxLeftRight + root.val, root.val);
}

var maxPathSum = function(root) {
    if(!root) {
        return;
    }
    
    if (!root.left && !root.right) {
        return root.val;
    }
    calculateMaxPathSum(root);
    return maximumSum;
};