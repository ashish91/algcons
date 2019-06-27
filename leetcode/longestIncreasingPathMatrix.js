/**
 * @param {number[][]} matrix
 * @return {number}
 */
var dirs = [ [0, 1], [1, 0], [-1, 0], [0, -1] ]

var dfs = function(mat, mem, i, j, m, n) {
  if (mem[i][j] > 0) {
    return mem[i][j];
  }
  
  var newR, newC, current, max = 1;
  for (var k = 0; k < 4; k++) {
    newR = i + dirs[k][0];
    newC = j + dirs[k][1];
    
    if (newR < 0 || newC < 0 || newR >= m || newC >= n || mat[i][j] >= mat[newR][newC]) continue;
    current = 1 + dfs(mat, mem, newR, newC, m, n)
    max = Math.max(max, current);
  }
  mem[i][j] = max;
  
  return max;
}

var longestIncreasingPath = function(matrix) {
  if (matrix.length == 0) return 0;
  var m = matrix.length, n = matrix[0].length, res = 1, current = 0, mem = [];
  
  for (var i = 0; i < m; i++) {
    mem[i] = [];
    for (var j = 0; j < n; j++) {
      mem[i].push(0);
    }
  }
  
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      current = dfs(matrix, mem, i, j, m, n);
      res = Math.max(current, res);
    }
  }
  
  return res;
};