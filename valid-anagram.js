/**Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  } else {
    const count = {};
    for (let i = 0; i < s.length; i++) {
      count[s[i]] = count[s[i]] ? count[s[i]] + 1 : 1;
      count[t[i]] = count[t[i]] ? count[t[i]] - 1 : -1;
    }
    const isOne = Object.keys(count).every((i) => count[i] === 0);
    return isOne;
  }
};
