function multiplyOddByMin(matrix) {
  let min = Infinity;
  for (let row of matrix) {
      for (let value of row) {
          if (value < min) {
              min = value;
          }
      }
  }

  const result = [];
  for (let i = 0; i < matrix.length; i++) {
      const newRow = [];
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] % 2 !== 0) {
              newRow.push(matrix[i][j] * min);
          } else {
              newRow.push(matrix[i][j]);
          }
      }
      result.push(newRow);
  }

  return result;
}

const matrix = [
  [5, 3, 6],
  [7, 11, 2],
  [15, 9, 4]
];

const result = multiplyOddByMin(matrix);
console.log(result);
