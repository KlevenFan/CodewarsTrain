// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
//
//   Simple, given a string of words, return the length of the shortest word(s).
//
//   String will never be empty and you do not need to account for different data types.

function findShort(s){
  return s.split(' ')
    .reduce((res, word) => {
      if (word.length < res) {
        return word.length
      }
      return res;
  }, Number.MAX_SAFE_INTEGER)
}

// Best
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}