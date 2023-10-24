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
 * @return {number[]}
 */
const largestValues = function(root) {
  const res = [];
  single(root, 0, res);
  return res;
};

function single(node, row, arr) {
  if (node == null) {
    return null;
  }
  if (row < arr.length) {
    if (node.val > arr[row]) {
      arr[row] = node.val;
    }
  } else {
    arr[row] = node.val;
  }
  single(node.left, row + 1, arr);
  single(node.right, row + 1, arr);
}
