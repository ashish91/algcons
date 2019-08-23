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
  
  var queue = [ [ root, 0 ] ], currentLevel = 0, currentNode = null;
  
  while (queue.length > 0) {
    currentNode = queue.shift();
    currentLevel = currentNode[1];
    currentNode = currentNode[0];
    
    if (currentNode.left) {
      queue.push([ currentNode.left, currentLevel + 1 ]); 
    }
    
    if (currentNode.right) {
      queue.push([ currentNode.right, currentLevel + 1 ]); 
    }
    
    if (queue.length == 0 || (currentLevel != queue[0][1])) {
      currentNode.next = null;
    } else {
      currentNode.next = queue[0][0];      
    }
  }

  return root;
};