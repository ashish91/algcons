class Solution(object):
    def numTrees(self, n):
        """
        :type n: int
        :rtype: int
        """
        result = [0] * (n+1)
        result[0] = 1
        for i in xrange(1, n+1):
          for j in xrange(i):
            result[i] += result[j] * result[i - j - 1]
        
        return result[n]
