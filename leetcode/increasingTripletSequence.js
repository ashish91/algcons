/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  
  var small = Number.MAX_VALUE;
  var large = Number.MAX_VALUE;
  
  for (var i = 0; i < nums.length; i++) {
    console.log(small);
    console.log(large);
    console.log(nums[i]);
      if (nums[i] <= small) {
        small = nums[i];
      }  else if (nums[i] <= large) {
        large = nums[i];
      } else {
        return true;
      }
  }
  
  return false;
};