/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function(nums) {
  let inc = true, dec =  true
  for(let i = 1, n = nums.length; i < n; i++) {
    inc &= nums[i] >= nums[i - 1]
    dec &= nums[i] <= nums[i - 1]
  }
  return inc ||  dec
};
