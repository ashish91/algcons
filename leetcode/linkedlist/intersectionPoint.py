# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        
        sizeA = self.sizeOfList(headA)
        sizeB = self.sizeOfList(headB)
        
        diff = abs(sizeA - sizeB)
        if sizeA > sizeB:
            headA = self.moveBy(headA, diff)
        else:
            headB = self.moveBy(headB, diff)
            
        while headA != None and headB != None:
            if headA == headB:
                return headA
            
            headA = headA.next
            headB = headB.next
        
        return None
            
    def moveBy(self, list, steps):
        while steps > 0:
            list = list.next
            steps -= 1
        return list
        
    def sizeOfList(self, list):
        size = 0
        temp = list
        while(temp != None):
            size += 1
            temp = temp.next
            
        return size
        