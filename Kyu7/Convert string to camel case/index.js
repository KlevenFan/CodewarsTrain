// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
  const arr = str.split(/_|-/);

  return arr.map((word, index)=> {
    if (index === 0) {
      return word;
    }

    return  word.replace(/\w/, word[0].toUpperCase());
  }).join('');
}

// Best

function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
    return match.charAt(1).toUpperCase();
  });
}