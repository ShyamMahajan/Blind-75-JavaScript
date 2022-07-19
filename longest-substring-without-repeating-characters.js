/**Given a string s, find the length of the longest substring without repeating characters. */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const len = s.length
    if (len <= 1) { return len }
    
    const indices = { [s[0]]: 0 }
    let max = 1
    let head = 0
    let i = 0
    while (++i < len) {
      const last = indices[s[i]]
      if (last >= head) {
        max = Math.max(max, i - head)
        head = last + 1
      }
      indices[s[i]] = i
    }
    
    return Math.max(max, i - head)
  };