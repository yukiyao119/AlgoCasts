// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [] // new Array(3).fill(0)
  let counter = 1 // 1...n
  
  for (let i = 0; i < n; i++) {
    results[i] = []
  }
  
  let start_col = 0
  let end_col = n-1
  let start_row = 0
  let end_row = n-1
  
  while( start_col <= end_col && start_row <= end_row) {
    
    //loop from start col to end col
    for (let i = start_col; i <= end_col; i++ ) {
      results[start_row][i] = counter //start_row is 0. this assigns the value for the first row of the matrix
      counter++
    }
    
    start_row++ //now go to the second row
    
    for( let i = start_row; i <= end_row; i++) { // loop from new start_row to end_row, start_col is still 0 to n-1
      results[i][end_col] = counter
      counter++
    }
    
    end_col--
    
    for ( let i = end_col; i >= start_col; i--) {
      results[end_row][i] = counter
      counter++
    }
    
    end_row--
    
    for (let i = end_row; i >= start_row; i--) {
      results[i][start_col] = counter
      counter++
    }
    
    start_col++
    
  }
  console.log(results)
  return results

}

module.exports = matrix;
