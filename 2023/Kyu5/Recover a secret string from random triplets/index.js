// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.
//
//   A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".
//
//   As a simplification, you may assume that no letter occurs more than once in the secret string.
//
//   You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

function recoverSecret(triplets) {
  // 获取全部字母的合集
  const letterSet = new Set();
  triplets.forEach((arr) => arr.forEach(item => letterSet.add(item)));
  const letterArr = Array.from(letterSet);

  // 重置顺序
  let flag = false;
  while (!flag) {
    flag = triplets.every((arr) => {
      const index1 = letterArr.indexOf(arr[0]);
      const index2 = letterArr.indexOf(arr[1]);
      const index3 = letterArr.indexOf(arr[2]);

      if (index1 > index2) {
        exchange(index1, index2);
        return false;
      }
      if (index2 > index3) {
        exchange(index2, index3);
        return false;
      }
      return true;
    });
  }

  return letterArr.join('');

  function exchange(index1, index2) {
    const temp = letterArr[index1];
    letterArr[index1] = letterArr[index2];
    letterArr[index2] = temp;
  }
}

// Best

function recoverSecret(triplets) {
  for(var [first] of triplets)
  {
    if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    {
      triplets.filter(([item]) => item === first).forEach(tuple => tuple.shift());
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}