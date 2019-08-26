class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zero = one = 0
        for two in range(len(nums)):
            v = nums[two]
            nums[two] = 2
            
            if v < 2:
                nums[one] = 1
                one += 1
                
            if v == 0:
                nums[zero] = 0
                zero += 1
        