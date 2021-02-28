// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
//   Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
//   Performance needs to be considered
// Input strings s1 and s2 are null terminated.
//   Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

  function scramble(str1, str2) {
    const str1Arr = str1.split('').sort();
    const str2Arr = str2.split('').sort();

  return str2Arr.every((letter) => {
    const index = str1Arr.indexOf(letter);

    if(index !== -1) {
      str1Arr.splice(0, index + 1);
      return true;
    } else {
      return false;
    }
  })
}

function scramble(str1, str2) {
  const str1Count = {};
  str1.split('').forEach((letter) => {
    str1Count[letter] = (str1Count[letter] || 0) + 1;
  });

  return str2.split('').every((letter) => --str1Count[letter] >= 0);
}

