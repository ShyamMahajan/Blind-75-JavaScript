/**Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string. */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    const map = new Map()
    for (let i = 0; i < t.length; i++) {
      map.set(t[i], (map.get(t[i]) || 0) + 1)
    }
  
    let count = 1
    let start = 0
    while (start < s.length && !map.has(s[start])) {
      start++
    }
    if (start === s.length) {
      return ''
    }
    if (t.length === 1) {
      return s[start]
    }
    map.set(s[start], map.get(s[start]) - 1)
  
    let minStart = start
    let minEnd = s.length
  
    for (end = start + 1; end < s.length; end++) {
      if (map.has(s[end])) {
        let endCount = map.get(s[end])
        map.set(s[end], --endCount)
        // endCount < 0 means there are too many s[end] within the window.
        if (endCount >= 0) {
          count++
        }
  
        // There could be too may s[start] within the window.
        // So after dumping the first s[start] the window might still be full.
        while (count === t.length) {
          if (end - start < minEnd - minStart) {
            minStart = start
            minEnd = end
          }
  
          let startCount = map.get(s[start])
          map.set(s[start], ++startCount)
          if (startCount > 0) {
            // the window is not full anymore
            count--
          }
  
          start++
          while (!map.has(s[start])) {
            start++
          }
        }
      }
    }
  
    return minEnd === s.length ? '' : s.slice(minStart, minEnd + 1)
  };