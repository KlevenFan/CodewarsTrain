// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
//
//   Example:
//
// Given an input string of:
//
//   apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:
//
//   apples, pears
// grapes
// bananas

function solution(input, markers) {
  const marketRegExpMap = markers.map((item) => {
    return new RegExp(`\\s*\\${item}.*$`,'mi')
  });

  marketRegExpMap.forEach((item) => {
    input = input.replace(item, '');
  });

  return input.trim();
}

// Best
function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}