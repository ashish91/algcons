/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var leftMax = new Array(height.length);
  var rightMax = new Array(height.length);
  var max = height[0];
  
  for (var i = 0; i < height.length; i++) {
    if (max < height[i]) {
      max = height[i];
    }
    leftMax[i] = max;
  }
  
  var max = height[height.length - 1];
  for (var i = height.length; i >= 0; i--) {
    if (max < height[i]) {
      max = height[i];
    }
    rightMax[i] = max;
  }
  
  var sum = 0;
  for (var i = 0; i < height.length; i++) {
    sum += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  
  return sum;
};