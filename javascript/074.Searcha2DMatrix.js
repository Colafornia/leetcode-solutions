// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rowLength = matrix.length
    if (!rowLength) {
        return false
    }
    const columnLength = matrix[0].length
    let col = columnLength - 1
    let row = 0
    while (row < rowLength && col >= 0) {
        if (matrix[row][col] === target) {
            return true
        }
        if (matrix[row][col] > target) {
            col--
        }
        if (matrix[row][col] < target) {
            row++
        }
    }
    return false
};

var searchMatrix2 = function (matrix, target) {
    // binary search
    // n * m matrix convert to an array => matrix[x][y] => a[x * m + y]
    // an array convert to n * m matrix => a[x] =>matrix[x / m][x % m];
    const rowLength = matrix.length
    if (!rowLength || !matrix[0].length) {
        return false
    }
    const columnLength = matrix[0].length
    let low = 0
    let high = rowLength * columnLength - 1
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)
            let midNumber = matrix[Math.floor(mid / columnLength)][mid % columnLength]
            if (midNumber === target) {
                return true
            }
            if (midNumber < target) {
                low = mid + 1
            }
            if (midNumber > target) {
                high = mid - 1
            }
    }
    return false
};

var matrix = [
    [1,3],
]

console.log(searchMatrix2(matrix, 3))