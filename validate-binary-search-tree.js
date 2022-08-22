/***Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees. */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
  
    function dfs(node, min, max) {
      if (node === null) {
        return true;
      }
      if (node.val <= min || node.val >= max) {
        return false;
      }
      return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }
  
    return dfs(root, -Infinity, Infinity)
    
      
  };