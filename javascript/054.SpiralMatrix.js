// https://leetcode-cn.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) {
    return matrix;
  }
  var rowsLen = matrix.length;
  var colsLen = matrix[0].length;
  var start = 0;
  var res = [];
  // the condition that there is a new circle begin with [start, start]
  while (rowsLen > start * 2 && colsLen > start * 2) {
    res = res.concat(printCircle(matrix, start, rowsLen, colsLen));
    start++;
  }
  return res;
};

var printCircle = function (matrix, start, rowsLen, colsLen) {
  var res = [];
  var endX = colsLen - start - 1;
  var endY = rowsLen - start - 1;
  for (var i = start; i <= endX; i++) {
    res.push(matrix[start][i]);
  }
  // from top to bottom
  if (start < endY) {
    for (var i = start + 1; i <= endY; i++) {
      res.push(matrix[i][endX]);
    }
  }
  // from right to left
  // the condition is start < endX plus the condition of 'rom top to bottom'
  if (start < endX && start < endY) {
    for (var i = endX - 1; i >= start; i--) {
      res.push(matrix[endY][i]);
    }
  }
  if (start < endX && start < endY - 1) {
    for (var i = endY - 1; i > start; i--) {
      res.push(matrix[i][start]);
    }
  }
  return res;
}