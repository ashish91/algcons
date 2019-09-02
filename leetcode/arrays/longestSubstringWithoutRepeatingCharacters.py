# Time complexity:  O(N)
# Space complexity: O(1)
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        begin = 0
        longestSubstring = 0
        seen = {}
        
        for i in range(len(s)):
            if s[i] in seen and begin <= seen[s[i]]:
                begin = seen[s[i]] + 1
            else:
                longestSubstring = max(longestSubstring, i - begin + 1)
            
            seen[s[i]] = i
            
        return longestSubstring
