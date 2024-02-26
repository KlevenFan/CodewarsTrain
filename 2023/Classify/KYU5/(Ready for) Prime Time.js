// We need prime numbers and we need them now!
//
//   Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.
//
//   For example,
//
//   11 => [2, 3, 5, 7, 11]

// Main
function prime(num) {

  const result = [];

  for (var i = 1; i <= num; i++) {
    if (isPrime(i))
      result.push(i);
  }

  return result;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  const sqrtNum = Math.sqrt(num);

  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true;
}

// Best
function prime(num) {
  var primes = [];
  loop: for (var i = 2; i <= num; i++) {
    for (var j = 0; j <= primes.length; j++)
      if (i % primes[j] === 0) continue loop;
    primes.push(i);
  }
  return primes;
}