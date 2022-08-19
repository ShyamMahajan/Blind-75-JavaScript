/***Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself. */
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    if (!subRoot) {
      return true;
    }
  
    if (!root) {
      return false;
    }
  
    if (isSameTree(root, subRoot)) {
      return true;
    }
  
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  };
  
  function isSameTree(p, q) {
   if (!p && !q) {
     return true;
   }
  
   if (!p || !q || p.val !== q.val) {
     return false;
   }
   
   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }