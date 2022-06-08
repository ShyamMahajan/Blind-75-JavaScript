/**Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = []
    let isValid = true
    for(let i =0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i])
        }else if(stack[stack.length - 1] + s[i] === "()" || stack[stack.length - 1] + s[i] === "{}" || stack[stack.length - 1] + s[i] === "[]"){
            stack.pop()
        }else{
            isValid = false
            break;
        }
    }
      if(isValid && stack.length === 0){
            return true
        }else{
            return false
        }
};