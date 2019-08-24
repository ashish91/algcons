# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        carry = 0
        s = l1
        prev1 = l1
        prev2 = l2
        
        while l1 != None or l2 != None:
            if l1 == None:
                prev1.next = l2
                l1 = l2
                
                prev2.next = None
                l2 = None
            elif l2 != None:        
                l1.val = l1.val + l2.val
            
            if l1 != None:
                l1.val += carry
            else:
                prev1.next = ListNode(carry)
                l1 = l1.next
            
            carry = 0
            if l1.val >= 10:
                carry = 1
                l1.val = l1.val%10
            
            prev1 = l1
            prev2 = l2
            l1 = l1.next
            if l2 != None:
                l2 = l2.next
        
        if carry > 0:
            prev1.next = ListNode(carry)
        return s
        
        