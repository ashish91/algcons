# Non DP solution.
# Time complexity:  O(N^2)
# Space complexity: O(1)
class Solution:
    def expandPalindrome(self, s: str, l: int, r: int) -> str:
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        
        return s[l+1:r]
    
    def longestPalindrome(self, s: str) -> str:
        temp = None
        longest = ''        
        for i in range(len(s)):
            temp = self.expandPalindrome(s, i, i)
            if len(temp) > len(longest):
                longest = temp
                
            temp = self.expandPalindrome(s, i, i + 1)
            if len(temp) > len(longest):
                longest = temp
        
        return longest

# DP solution.
# Time complexity:  O(N^2)
# Space complexity: O(N^2)
class Solution:
    def longestPalindrome(self, s: str) -> str:
        mem = []
        longest = [0, 0]

        for i in range(len(s)):
            mem.append([0]*len(s))
            
        for i in range(len(s)):
            mem[i][i] = 1
            if i < len(s) - 1 and s[i] == s[i+1]:
                mem[i][i+1] = 1
                longest = [i, i+1]

        for i in range(len(s) - 2, -1, -1):
            for j in range(i+2, len(s)):
                if s[i] == s[j] and mem[i+1][j-1] == 1:
                    mem[i][j] = 1
                    if j - i > longest[1] - longest[0]:
                        longest = [i, j]
        
        return s[longest[0]:longest[1]+1]