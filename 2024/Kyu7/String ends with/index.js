// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
//
//   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
//   solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  const lastIndex = str.lastIndexOf(ending);

  if(lastIndex === -1) {
    return false
  }

  return lastIndex + ending.length === str.length;
}

console.log(solution('abc', 'd'))

// Best
function solution(str, ending){
  return str.substr(-ending.length) === ending;
}

function solution(str, ending){
  return str.endsWith(ending);
}