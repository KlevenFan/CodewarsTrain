// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
//
//   You might know some pretty large perfect squares. But what about the NEXT one?
//
//   Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
//   If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
//
//   Examples:(Input --> Output)
//
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  let result = -1;
  let powNum = 1;
  while(powNum * powNum <= sq) {
    if(powNum * powNum === sq) {
      result = powNum;
    }
    powNum++;
  }

  return result === -1 ? result : Math.pow(result + 1, 2);
}

// Best
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}