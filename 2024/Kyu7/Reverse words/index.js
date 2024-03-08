// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
//
//   Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
//   Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   return str.replace(/\b\S+\b/g, (match) => {
//     return Array.from(match).reverse().join('');
//   })
// }

function reverseWords(str) {
  return str
    .split(' ')
    .map((item) => {
      if(!item) return item;

      return Array.from(item).reverse().join('');
    })
    .join(' ');
}

// Best
var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)

// Best2
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}