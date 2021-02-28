// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
//
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
//
//   The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
//
//   Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1
// mov rdi, 1071225
// call find_nb            ; rax <-- 45
//
// mov rdi, 91716553919377
// call find_nb            ; rax <-- -1

function findNb(m) {
  let sum = 0;
  let n = 1;

  while(sum < m) {
    sum += Math.pow(n, 3);

    if (sum === m) {
      return n
    }

    if (sum > m) {
      return (-1);
    }

    n++;
  }
}

// Best
function findNb(m) {
  let n = 0;
  while (m > 0) m -= ++n^3;
  return m ? -1 : n
}