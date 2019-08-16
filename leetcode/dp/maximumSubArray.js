/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
        var result = nums[0];
        for (var i = 1; i < nums.length; i++) {
            if(nums[i-1] > 0) {
                nums[i] += nums[i-1];   
            }
            result = Math.max(result, nums[i]);
        }
        
        return result;
};
