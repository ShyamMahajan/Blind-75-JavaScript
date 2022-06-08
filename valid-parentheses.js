/**Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. */

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