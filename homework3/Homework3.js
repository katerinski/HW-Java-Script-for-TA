// Practical task 3

// 1.
function sumNumbers(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumNumbers([2, 3, 4, 5]));

// 2.
function distinctOddEvenNumber() {
  for (i = 0; i <= 15; i += 1) {
    if (i % 2 == 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}

distinctOddEvenNumber();

// 3.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function randArray(k) {
  let array = [];
  for (i = 0; i < k; i += 1) {
    array.push(getRandomInt(1, 500));
  }
  return array;
}

console.log(randArray(5));

// 4.
function raiseToDegree(a, b) {
  a = Number(prompt("Enter your whole number:"));
  if (a % 1 !== 0) {
    return alert("Entered number is not whole, please restart and try again");
  }
  b = Number(prompt("Enter your whole degree number"));
  if (b % 1 !== 0) {
    return alert("Entered number is not whole, please restart and try again");
  }
  let res = a ** b;
  return res;
}

console.log(raiseToDegree());

// 5.
function findMin() {
  let array = arguments;
  let length = array.length;
  let min = array[length - 1];
  for (i = 0; i < length; i += 1) {
    if (array[i] < min) min = array[i];
  }
  return min;
}

console.log(findMin(12, 14, 4, -4, 0.2));

// 6.
function findUnique(arr) {
  let checkedElements = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (checkedElements.indexOf(element) !== -1) {
      return false;
    }
    checkedElements.push(element);
  }
  return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

// 7.
function lastElem(arr, x) {
  let res = [];
  let length = arr.length;
  for (i = 0; i < length; i += 1) {
    if (x == null) {
      res = arr[length - 1];
    } else if (x < length) {
      if (i >= length - x) {
        res.push(arr[i]);
      }
    } else res = arr;
  }
  return res;
}

console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

// 8.
function makeUpperCase(str) {
  let newArr = str.split(" ");
  for (i = 0; i < newArr.length; i += 1) {
    newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
  }
  let newStr = newArr.join(" ");
  return newStr;
}

console.log(makeUpperCase("i love java script"));
