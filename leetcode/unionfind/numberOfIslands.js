/**
 * @param {character[][]} grid
 * @return {number}
 */
var markOnes = function(grid, row, col, rowsize, colsize) {
  if (row < 0 || row >= rowsize || col < 0 || col >= colsize || grid[row][col] == 0) {
    return;
  }
  
  grid[row][col] = 0;
  markOnes(grid, row + 1, col, rowsize, colsize);
  markOnes(grid, row - 1, col, rowsize, colsize);
  markOnes(grid, row, col + 1, rowsize, colsize);
  markOnes(grid, row, col - 1, rowsize, colsize);
}

var numIslands = function(grid) {
  var colsize = 0, rowsize = 0, islands = 0;
  for (let i = 0; i < grid[0].length; i++) {
    colsize++;
  }
  for (let i = 0; i < grid.length/grid[0].length; i++) {
    rowsize++;
  }
  for (let i = 0; i < rowsize; i++) {
    for (let j = 0; j < colsize; j++) {
      if (grid[i][j] == 1) {
        markOnes(grid, i, j, rowsize, colsize);       
        islands++;
      }
    }
  }
  
  return islands;
};