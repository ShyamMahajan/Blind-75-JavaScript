/**Given the root of a binary tree, invert the tree, and return its root. */
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
 * @return {TreeNode}
 */

var invertTree = function (root) {
    const queue = [root];
    while (queue.length) {
        let current = queue.shift();
        if(current === null) continue;
        swap(current)
        queue.push(current.left)
        queue.push(current.right)
    }
    return root;
};

const swap = (node) => {
    let temp=  node.right
    node.right = node.left;
    node.left = temp
    return node
}
