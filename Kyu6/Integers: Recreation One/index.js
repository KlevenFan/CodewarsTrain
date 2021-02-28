// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!
//
//   Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.
//
//   The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.
//
//   #Examples:
//
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see Example Tests: for more details.
//
//   Note
//
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function listSquared(m, n) {
  let start = m;
  let end = n;
  const result = [];

  while(start <= end) {
    let gens = getGens(start);
    let sum = gens.reduce((acc, current) => {
      return acc + Math.pow(current, 2);
    }, 0);

    if (isSqrt(sum)) {
      result.push([start, sum])
    }
    start++;
  }

  return result;

  function getGens(number) {
    if (number === 1) {
      return [1];
    }

    const gensArr = [];
    const half = number / 2 + 1;

    for(let i = 1; i < half; i++) {
      if (number % i === 0) {
        gensArr.push(i)
      }
    }

    gensArr.push(number);

    return gensArr;
  }

  function isSqrt(number) {
    for (let i = 1; number > 0; i += 2) number -= i;

    return number === 0;
  }
}

// Best
function listSquared (m, n) {
  var matches = [];

  for (var i = m; i <= n; ++i) {
    var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
    var ok = Number.isInteger(Math.sqrt(sum));

    if (ok) {
      matches.push([i, sum]);
    }
  }

  return matches;
}

function getDivisors (n) {
  var divisors = [];

  for (var i = 1; i <= n / 2; ++i) {
    if (n % i) {
      continue;
    }

    divisors.push(i);
  }

  return divisors.concat([n]);
}