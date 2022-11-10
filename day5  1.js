// Print odd numbers in an array in anonymous function

  var array = [2,18,17,14,5,21]
  var arr=[]
  var odd = function(array){
    for( let i =0; i<array.length ; i++){
      if(array[i]%2 != 0)
      {
   arr.push(array[i])
      }
     
    }
    return arr
  }
console.log(odd(array))

// Print odd numbers in an array in IIFE function

(function(arr) {
    for(let i =0 ; i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
              }
            }
            )
([1,2,3,4,5,6,7,8,9])
 
// Print odd numbers in an array in arrow function

var arr = [1,2,3,4,5,6,7,8,9];

var odd = arr.filter(a => a%2==1);

console.log(odd);
// Sum of all numbers in an array in anonymous function.

arr = [1,8,5,4,9]
var sum = function(arr){
  var total=0;
  for( let i =0; i<arr.length; i++){
    
    total =total+arr[i]
    
  }
  return total
}
console.log(sum(arr))

// Sum of all numbers in an array in IIFE function.

(function(array){
  var total =0;
  for(let i=0;i<array.length;i++){
total = total + array[i]
  }
  console.log(total)
  })
([1,8,5,4,9])

// Sum of all numbers in an array in ARROW function.
let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((a, b) => a + b);

console.log(sum);


