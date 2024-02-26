//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
//
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
//   Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const map = {
    o: 0,
    x: 0,
  }

  str.split('')
    .map(item => item.toLowerCase())
    .forEach(item => {
      map[item] = map[item] ? map[item] + 1 : 1;
    })

  return map.o === map.x;
}

// Best
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}