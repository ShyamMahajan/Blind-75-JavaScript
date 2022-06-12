/**A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase(); // to remove all non-alphanumeric characters
    let reversed = ""
    for(let i = replaced.length-1; i >= 0; i--){
        reversed += replaced[i]
    }
    if(reversed === replaced){
        return true
    }else{
        return false
    }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))