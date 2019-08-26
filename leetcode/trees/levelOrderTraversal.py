# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        traversal = []
        queue = [root]
        while queue:
            traversal.append([node.val for node in queue])
            temp = []
            for node in queue:
                temp.extend([node.left, node.right])
            queue = [leaf for leaf in temp if leaf]
        return traversal