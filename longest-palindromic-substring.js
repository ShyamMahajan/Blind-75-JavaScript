/**Given a string s, return the longest palindromic substring in s. */

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s.length <= 1) {
      return s
    }
    
    const p = new Array(s.length)
    for (let i = s.length - 1; i >= 0; i--) {
      p[i] = []
      p[i][i] = true
      p[i][i+1] = s[i] === s[i+1]
      for (let j = i + 2; j < s.length; j++) {
        p[i][j] = p[i+1][j-1] && s[i] === s[j]
      }
    }
    
    let start = 0
    let maxLen = 1
    for (let i = 1; i < s.length; i++) {
      for (let k = 0; k <= i - maxLen; k++) {
        if (p[k][i]) {
          if (i - k + 1 > maxLen) {
            maxLen = i - k + 1
            start = k
          }  
          break
        }
      }
    }
    
    return s.substr(start, maxLen)
  };