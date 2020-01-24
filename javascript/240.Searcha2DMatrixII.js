// https://leetcode.com/problems/search-a-2d-matrix-ii/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix.length || !matrix[0].length) {
        return false
    }
    const rowLength = matrix.length
    const columnLength = matrix[0].length
    let row = 0
    let column = columnLength - 1
    while (row < rowLength && column > -1) {
        const num = matrix[row][column]
        if (num === target) {
            return true
        }
        if (num > target) {
            column--
        }
        if (num < target) {
            row++
        }
    }
    return false
};
