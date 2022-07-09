/**Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array. */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let max = Math.max(...nums),
       currentMin = (currentMax = 1);
   
     for (let num of nums) {
       if (num === 0) {
         currentMin = currentMax = 1;
         continue;
       }
   
       const temp = currentMax * num;
       currentMax = Math.max(temp, currentMin * num, num);
       currentMin = Math.min(temp, currentMin * num, num);
       max = Math.max(max, currentMax);
     }
   
     return max;
   };