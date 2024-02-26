// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// main 好处，只遍历一遍
function moveZeros (arr) {
    let tail = arr.length - 1;

    for (let head = 0; head <= tail; head++) {
        if (arr[head] === 0) {
          arr.splice(head, 1);
          arr.push(0);
          head--;
          tail--;
        }
    }

    return arr;
}

// Best
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}