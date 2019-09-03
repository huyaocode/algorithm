/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 * 例如，如果输入如下4 X 4矩阵：
 *  1  2  3  4
 *  5  6  7  8
 *  9 10 11 12
 * 13 14 15 16
 * 则依次打印出数字 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */

// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

const matrix = [[1], [5], [9], [13]];

console.log(printMatrix(matrix));
function printMatrix(matrix) {
  if (matrix == null || matrix.length === 0) {
    return null;
  }
  let list = [];
  let xS = 0,
    yS = 0,
    yE = matrix.length - 1,
    xE = matrix[0].length - 1;
  while (yE >= yS && xE >= xS) {
    list = printCercle(list, matrix, xS++, yS++, xE--, yE--);
  }
  return list;
}

function printCercle(list = [], matrix, xS, yS, xE, yE) {
  let col = xS,
    row = yS;
  // 上边 -->
  while (col <= xE) {
    list.push(matrix[row][col++]);
  }
  // 右边 v
  (row = yS + 1), (col = xE);
  while (row <= yE) {
    list.push(matrix[row++][col]);
  }
  // 下
  row = yE;
  col = xE - 1;
  while (col >= xS && row != xS) {
    list.push(matrix[row][col--]);
  }
  // 左
  (row = yE - 1), (col = xS);
  while (row > yS && col !== xE) {
    list.push(matrix[row--][col]);
  }
  return list;
}

// -----------------------------

function printMatrix(matrix) {
  let res = [];
  let row = matrix.length(); //行数
  let col = matrix[0].length(); //列数
  //计算打印的圈数
  let circle = ((row < col ? row : col) - 1) / 2 + 1; //圈数
  for (let i = 0; i < circle; i++) {
    //从左向右打印
    for (let j = i; j < col - i; j++) {
      res.push(matrix[i][j]);
    }
    //从上往下的每一列数据
    for (let k = i + 1; k < row - i; k++) {
      res.push(matrix[k][col - 1 - i]);
    }
    //判断是否会重复打印(从右向左的每行数据)
    for (let m = col - i - 2; m >= i && row - i - 1 != i; m--) {
      res.push(matrix[row - i - 1][m]);
    }
    //判断是否会重复打印(从下往上的每一列数据)
    for (let n = row - i - 2; n > i && col - i - 1 != i; n--) {
      res.push(matrix[n][i]);
    }
  }
  return res;
}
