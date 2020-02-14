// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let ans = 0
    if (!grid || !grid.length) {
        return ans
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (Number(grid[i][j]) === 1) {
                ans++
                explore(i, j, grid)
            }
        }
    }
    return ans
};

var explore = function (startI, startJ, grid) {
    if (Number(grid[startI][startJ]) !== 1) {
        return
    }
    grid[startI][startJ] = '0'
    startI + 1 < grid.length && explore(startI + 1, startJ, grid)
    startI - 1 >= 0 && explore(startI - 1, startJ, grid)
    startJ + 1 < grid[0].length && explore(startI, startJ + 1, grid)
    startJ - 1 >= 0 && explore(startI, startJ - 1, grid)
}
