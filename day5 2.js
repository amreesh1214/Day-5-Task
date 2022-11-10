// Convert all the strings to title caps in a string array
var strings=["hi","how","Hi"]
var result = strings.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  
  console.log(result);

var arr=["hi","how","Hi","amreesh"]
var convertToTitleCase = arr.map(function(str) {
         return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
  
  
  console.log(convertToTitleCase);
//   Convert all the strings to title caps in a string array
  var arr1=["hi","how","Hi","amreesh","good"]

  let result = arr1.map(a => a.charAt(0).toUpperCase() + a.slice(1));

console.log(result);
// Return all the prime numbers in an array
var primeNums = [2,3,4,5,6,9,87,10,12,15,17,23,29,97];


function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return i;
}

var primeNums = primeNums.filter(isPrime);
console.log(primeNums);
// Return all the prime numbers in an array
const primeNumbers = (numbers) => {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        result.push(numbers[i]);
      }
    }
    return result;
  }
  
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));