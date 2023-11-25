// Q1.Odd number in anonymous function
var odd = function (arr) {
  var X = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      X.push(arr[i]);
    }
  }
  return X.join(" ");
};
console.log(odd([1, 2, 3, 4, 5, 6]));

// IIFE
(function (arr) {
  var X = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      X.push(arr[i]);
    }
  }
  console.log(X.join(" "));
})([1, 2, 3, 4, 5, 7, 8, 9, 10]);

//Arrow function
var odd = (arr) => {
  var X = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      X.push(arr[i]);
    }
  }
  return X.join(" ");
};
console.log(odd([1, 2, 3, 4, 5, 6, 7]));

// Q.2 Tittle caps

var titlecase = function (str) {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(titlecase("kio karthick"));

// IIFE
(function (str) {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
})("guvi geek");

// Arrow function
var tittlecase = (str) => {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(tittlecase("raty rathish"));

// Q.3 sum of all numbers
var sum = function (add) {
  var sum = 0;
  for (var i = 0; i < add.length; i++) {
    sum += add[i];
  }
  return sum;
};
console.log(sum([1, 2, 3, 4, 5, 6]));

// IIFE
(function (add) {
  var sum = 0;
  for (var i = 0; i < add.length; i++) {
    sum += add[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5, 6, 7]);

// Arrow function
var sum = (add) => {
  var sum = 0;
  for (var i = 0; i < add.length; i++) {
    sum += add[i];
  }
  return sum;
};
console.log(sum([1, 2, 3, 4, 5]));

// Q.4 Prime number in an array
var prime = function (arr) {
  var x = [];
  for (i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      x.push(arr[i]);
    }
  }
  return x;
};
console.log(prime([1, 2, 3, 4, 5, 6, 13, 17]));

// IIFE
(function (arr) {
  var x = [];
  for (i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      x.push(arr[i]);
    }
  }
  console.log(x);
})([1, 2, 3, 4, 5]);

// Arrow function
var prime = (arr) => {
  var x = [];
  for (i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      x.push(arr[i]);
    }
  }
  return x;
};
console.log(prime([1, 2, 3, 4, 5, 6, 13, 17]));

// Q.4 pallindrome
var palindrome = function (arr) {
  var k = arr.join(" ").split(" ");
  var x = [];
  for (var i = 0; i < k.length; i++) {
    var z = k[i].split("").reverse().join("");
    if (z == arr[i]) {
      x.push(arr[i]);
    }
  }
  return x;
};
console.log(palindrome([121, 131, 154]));

// IIFE
(function (arr) {
  var k = arr.join(" ").split(" ");
  var x = [];
  for (var i = 0; i < k.length; i++) {
    var z = k[i].split("").reverse().join("");
    if (z == arr[i]) {
      x.push(arr[i]);
    }
  }
  console.log(x);
})([121, 131, 154]);

// Arrow function
var palindrome = (arr) => {
  var k = arr.join(" ").split(" ");
  var x = [];
  for (var i = 0; i < k.length; i++) {
    var z = k[i].split("").reverse().join("");
    if (z == arr[i]) {
      x.push(arr[i]);
    }
  }
  return x;
};
console.log(palindrome([121, 131, 154]));

//palindrome function:
//anonymous:

var palindrome = function (arr) {
  var k = arr.join(" ").split(" ");
  var y = [];
  for (var i = 0; i < k.length; i++) {
    var z = k[i].split("").reverse().join("");
    if (z == arr[i]) {
      y.push(arr[i]);
    }
  }
  return y;
};

console.log(palindrome([121, 131, 154]));

//IIFE:
(function (arr) {
  var k = arr.join(" ").split(" ");
  var y = [];
  for (var i = 0; i < k.length; i++) {
    var z = k[i].split("").reverse().join("");
    if (z == arr[i]) {
      y.push(arr[i]);
    }
  }
  return y;
})([121, 131, 154]);

//arrow for palindrome:
var palindrome = (arr) => {
  var k = arr.join(" ").split(" ");
  var y = [];
  for (var i = 0; i < k.length; i++) {
    var z = k[i].split("").reverse().join("");
    if (z == arr[i]) {
      y.push(arr[i]);
    }
  }
  return y;
};

console.log(palindrome([121, 131, 154]));

//dublicate number deletion from array:
//anonymous function:
var dul = function (arr) {
  var x = [];
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 1) {
      x.push(arr[i]);
    }
  }
  return x;
};
console.log(dul([2, 2, 4, 4, 5, 6, 8, 11]));

//IIFE:

(function (arr) {
  var x = [];
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 1) {
      x.push(arr[i]);
    }
  }
  return x;
})([2, 2, 4, 4, 5, 6, 8, 11]);

//arrow:
var dul = (arr) => {
  var x = [];
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 1) {
      x.push(arr[i]);
    }
  }
  return x;
};
console.log(dul([2, 2, 4, 4, 5, 6, 8, 11]));
