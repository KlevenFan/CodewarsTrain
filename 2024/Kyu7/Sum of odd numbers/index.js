// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
//
//   Given the triangle of consecutive odd numbers:
//
//   1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  const firstNum = (n ** 2) - (n-1);
  let result = firstNum;
  for(let i = 1; i < n; i++ ) {
    let nextNum = firstNum + i * 2;
    result += nextNum;
  }
  return result;
}

// Best
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}