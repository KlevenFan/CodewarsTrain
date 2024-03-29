// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
  const temp = {};

  return !str.split('')
    .map(item => item.toLowerCase())
    .some((item) => {
      if (temp[item]) {
        return true;
      } else {
        temp[item] = 1;
      }
    })
}

// Best
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}