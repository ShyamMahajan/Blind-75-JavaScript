/**You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container. */

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let resultantArea = 0,
      low = 0,
      high = height.length - 1;
  
    while (low < high) {
      const smallestHeight = Math.min(height[low], height[high]);
  
      const area = smallestHeight * (high - low);
  
      resultantArea = Math.max(resultantArea, area);
  
      height[low] < height[high] ? low++ : high--;
    }
  
    return resultantArea;
    
};