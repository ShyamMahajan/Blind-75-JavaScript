/**Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const count = {};
    let isDup = false;
    for(let i=0; i < nums.length; i++){
        if(count[nums[i]]){
            isDup = true;
            break
        }else{
            count[nums[i]] = true
        }
    }
    return isDup;
};