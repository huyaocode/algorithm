function maxSubmatrixSum(matrix, n, m) {
  let real_sum = 0;
  let result = 0;
  for (let i = 0; i + n - 1 < matrix.length; i++) {
    for (let j = 0; j + m - 1 < matrix[0].length; j++) {
      if (j == 0) {
        real_sum = 0;
        for (let x = i; x < i + n; x++) {
          for (let y = 0; y < m; y++) {
            real_sum += matrix[x][y];
          }
        } //console.log(real_sum)
      } else {
        for (let x = i; x < i + n; x++) {
          real_sum += matrix[x][j + m - 1] - matrix[x][j - 1];
        } //console.log(real_sum)
      }
      if (real_sum > result) {
        result = real_sum;
      }
    }
  }
  console.log(result);
}
const matrix = [[2, 4, 6, 8], [1, 3, 5, 7], [1, 2, 4, 8], [3, 6, 7, 9]];
const n = 2;
const m = 2;
maxSubmatrixSum(matrix, n, m);
