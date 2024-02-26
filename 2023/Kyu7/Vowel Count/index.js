// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Return the number (count) of vowels in the given string.
//
//   We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  if (!str) return 0;

  let result = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const strArray = Array.from(str);

  strArray.forEach((letter) => {
    if (vowels.includes(letter)) {
      result++;
    }
  })

  return result;
}

// Best
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}