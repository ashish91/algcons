class Solution:
  def threeSum(self, nums: List[int]) -> List[List[int]]:
    triplets = []
    
    nums.sort()
    size = len(nums)
    for i in range(size):
      if i > 0 and nums[i] == nums[i - 1]:
        continue

      l = i + 1
      r = size - 1
      
      while l < r:
        sum = nums[i] + nums[l] + nums[r]

        if sum > 0:
          r -= 1
        elif sum < 0:
          l += 1
        else:
          triplets.append([nums[i], nums[l], nums[r]])
          l += 1
          while l < r and nums[l] == nums[l - 1]:
            l += 1
      
    return triplets