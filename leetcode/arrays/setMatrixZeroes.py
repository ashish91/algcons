class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rowFlag = False
        colFlag = False
        
        for r in range(0, len(matrix)):
            for c in range(0, len(matrix[0])):
                if r == 0 and matrix[r][c] == 0:
                    rowFlag = True
                
                if c == 0 and matrix[r][c] == 0:
                    colFlag = True
                
                if matrix[r][c] == 0:
                    matrix[r][0] = 0
                    matrix[0][c] = 0
                
        for r in range(1, len(matrix)):
            for c in range(1, len(matrix[0])):               
                if matrix[r][0] == 0 or matrix[0][c] == 0:
                    matrix[r][c] = 0

        
        if colFlag:
            for r in range(0, len(matrix)):
                matrix[r][0] = 0
            
        if rowFlag:       
            for c in range(0, len(matrix[0])):
                matrix[0][c] = 0
        