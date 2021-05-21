// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
//
//   "(p1**n1)(p2**n2)...(pk**nk)"
// where a ** b means a to the power of b
//
// with the p(i) in increasing order and n(i) empty if n(i) is 1.
//
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(num){
  const halfNum = num / 2;
  const result = [];

  for(let i = 2; i <= halfNum; i++) {
    if (isPrime(i) && num % i === 0) {
      let tempNum = num;
      const itemResult = {
        num: i,
        count: 0
      }
      while (tempNum % i === 0) {
        itemResult.count++;
        tempNum = tempNum / i
      }
      result.push(itemResult);
    }
  }

  return printResult(result);
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

function printResult(primeNumList) {
  let result = '';

  primeNumList.forEach((item) => {
    if (item.count === 1) {
      result += `(${item.num})`;
      return;
    }

    result += `(${item.num}**${item.count})`;
  })

  return result;
}

// Best
function primeFactors(n){
  for (var i=2, res="", f; i <= n; i++) {
    f=0;
    while (n%i == 0) { f++; n/=i }
    res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
  }
  return res || "("+n+")"
}