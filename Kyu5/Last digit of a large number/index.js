// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!
//
//   For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.
//
// You may assume that the input will always be valid.
//
//   Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9
// lastDigit("10","10000000000")  // returns 0

const lastDigit = (str1, str2) => {
  const str1LastNumber = Number(str1[str1.length - 1]);

  if (str2 === '1') {
    return str1LastNumber;
  }

  if (str2 === '0') {
    return 1;
  }

  if (str1 === '0' && str2 === '0') {
    return 1;
  }

  const possibleNumber = [];
  let tempProduct = 1;
  while (true) {
    tempProduct *= str1LastNumber;
    if (possibleNumber.indexOf(tempProduct % 10) === -1) {
      possibleNumber.push(tempProduct % 10)
    } else {
      break;
    }
  }

  const mod = modBigNum(str2, possibleNumber.length);

  return mod === 0 ? possibleNumber[possibleNumber.length -1] : possibleNumber[mod - 1];

  function modBigNum(s, divisor) {
    let mod = 0;
    for (let i = 0; i < s.length; i++) {
      mod = (mod * 10 + (s[i] - 0)) % divisor;
    }
    return mod;
  }
};