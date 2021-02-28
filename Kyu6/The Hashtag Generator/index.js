// The marketing team is spending way too much time typing in hashtags.
//   Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
//   All words must have their first letter capitalized.
//   If the final result is longer than 140 chars it must return false.
//   If the input or the result is an empty string it must return false.
//   Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
  if(str.replace(/\s*/g, '') === '') {
    return false
  }

  const trimedStr = str.trim();
  const result = '#' + trimedStr.replace(/\s+\w/gi, match =>  match.charAt(match.length - 1).toUpperCase());

  return result.length > 140 ? false : result.replace(/\w/i, match => match[0].toUpperCase());
}

//Best
function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}