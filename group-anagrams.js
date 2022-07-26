/**Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let result = {};
    for (let i = 0; i < strs.length; i++) {
      const hash = strs[i].split('').sort().join('');
      result[hash] = result[hash] || []
      result[hash].push(strs[i])
    }
    return Object.values(result)
  };