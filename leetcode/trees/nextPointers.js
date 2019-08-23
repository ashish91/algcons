/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return root;
    }
    
    var queue = [], currentNode;
    queue.push(root);
    queue.push(null);
    
    while (queue.length > 0) {
        currentNode = queue.shift();
        if (currentNode == null) {
            if (queue.length > 0) {
                queue.push(null);   
            }
            continue;
        }

        currentNode.next = queue[0];
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    
    return root;
};