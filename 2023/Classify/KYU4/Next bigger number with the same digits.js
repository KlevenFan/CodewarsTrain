// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
//
//   12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
//
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

function nextBigger(n){
  const [left, right] = splitArray(String(n).split(''), 2);

  const result = Number(left+right);
  if (result === n) {return -1}

  return result
}

function splitArray(digitalArr, tailCount) {
  if (tailCount > digitalArr.length) {return [digitalArr.join(''), '']}
  const tailArr = digitalArr.slice(-tailCount);

  if (tailArr[0] < tailArr[1]) {
    return resort(digitalArr, tailCount, tailArr);
  }

  return splitArray(digitalArr, tailCount + 1)
}

function resort(digitalArr, tailCount, tailArr) {
  const firstNum = tailArr[0];
  const tailArrRest = tailArr.slice(-tailCount + 1);
  const changeIndex = tailArrRest.sort().findIndex(num => firstNum < num) ;

  const temp = tailArrRest[changeIndex];
  tailArrRest[changeIndex] = firstNum;

  const left = digitalArr.slice(0, -tailCount);
  const right = [temp].concat(tailArrRest.sort());

  return [left.join(''), right.join('')];
}

console.log(nextBigger(144));