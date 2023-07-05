// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // numbers.forEach(function(element) {
// //   if (element % 2 !== 0) {
// //     console.log(element);
// //   }
// // });

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // (function(numbers) {
// //     numbers.forEach(function(element) {
// //   if (element % 2 !== 0) {
// //     console.log(element);
// //   }
// // });
// // })(numbers);


// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const oddNumbers = numbers.filter(num => num % 2 !== 0);
// // oddNumbers.forEach(num => console.log(num));

// let stringArray = ["hello world", "programming is fun", "coding is awesome"];

// let titleCapsArray = stringArray.map(function(string) {
//   return string.split(' ').map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join(' ');
// });

// console.log(titleCapsArray);

// let stringArray = ["hello world", "programming is fun", "coding is awesome"];
// let titleCapsArray = stringArray.map(function(string) {
//   return string.split(' ').map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join(' ');
// });
// console.log(titleCapsArray);


// let stringArray = ["hello world", "programming is fun", "coding is awesome"];
// let titleCapsArray = stringArray.map((string) => {
//   return string.split(' ').map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join(' ');
// });
// console.log(titleCapsArray);



// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(function(acc, curr) {
//   return acc + curr;
// }, 0);
// console.log(sum);


// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// (function() {
//     const numbers = [1, 2, 3, 4, 5];
//     const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//     console.log(sum);
//   })();
  
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const primeNumbers = numbers.filter(function(number) {
//     if (number < 2) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   });
//   console.log(primeNumbers);


//   (function() {
//     var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//     var primes = [];
//     for (var i = 0; i < numbers.length; i++) {
//       var isPrime = true;
//       for (var j = 2; j < numbers[i]; j++) {
//         if (numbers[i] % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime && numbers[i] > 1) {
//         primes.push(numbers[i]);
//       }
//     }
//     console.log(primes);
//   })();


//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primes = getPrimeNumbers(numbers);
// const getPrimeNumbers = (arr) => {
//     const primeNumbers = [];
  
//     const isPrime = (num) => {
//       if (num < 2) {
//         return false;
//       }
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     };
//     arr.forEach((num) => {
//       if (isPrime(num)) {
//         primeNumbers.push(num);
//       }
//     });
//     return primeNumbers;
//   };
//   console.log(primes);



//   const strings = ["level", "hello", "racecar", "world", "madam"];
// const palindromes = strings.filter(function(string) {
//   const reversedString = string.split("").reverse().join("");
//   return string === reversedString;
// });
// console.log(palindromes);


// const array = ["level", "hello", "madam", "world", "racecar"];
// const palindromes = (function() {
//   return array.filter(function(element) {
//     const reversed = element.split("").reverse().join("");
//     return element === reversed;
//   });
// })();
// console.log(palindromes);

// const array = ["level", "hello", "madam", "world", "racecar"];
// const palindromes = array.filter(element => {
//   const reversed = element.split("").reverse().join("");
//   return element === reversed;
// });
// console.log(palindromes);


// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// const findMedian = (arr1, arr2) => {
//     const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
//     const middleIndex = mergedArray.length / 2;
  
//     if (mergedArray.length % 2 === 0) {
//       const middleElement1 = mergedArray[middleIndex - 1];
//       const middleElement2 = mergedArray[middleIndex];
//       return (middleElement1 + middleElement2) / 2;
//     } else {
//       return mergedArray[Math.floor(middleIndex)];
//     }
// };


// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];

// (function(arr1, arr2) {
//   const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
//   const middleIndex = mergedArray.length / 2;

//   if (mergedArray.length % 2 === 0) {
//     const middleElement1 = mergedArray[middleIndex - 1];
//     const middleElement2 = mergedArray[middleIndex];
//     console.log((middleElement1 + middleElement2) / 2);
//   } else {
//     console.log(mergedArray[Math.floor(middleIndex)]);
//   }
// })(arr1, arr2);



// const array = [1, 2, 3, 2, 4, 3, 5, 6, 5];
// const uniqueArray = array.filter(function(value, index, self) {
//   return self.indexOf(value) === index;
// });
// console.log(uniqueArray);



// const array = [1, 2, 3, 2, 4, 3, 5, 6, 5];
// const uniqueArray = (function(arr) {
//   return arr.filter(function(value, index, self) {
//     return self.indexOf(value) === index;
//   });
// })(array);
// console.log(uniqueArray);



// const rotateArray = (arr, k) => {
//   k = k % arr.length;
//   const rotated = arr.splice(-k).concat(arr);
//   return rotated;
// };
// const array = [1, 2, 3, 4, 5];
// const rotations = 2;
// const rotatedArray = rotateArray(array, rotations);
// console.log(rotatedArray);


// const rotatedArray = (function(arr, k) {
//   k = k % arr.length;
//   const rotated = arr.splice(-k).concat(arr);
//   return rotated;
// })([1, 2, 3, 4, 5], 2);

// console.log(rotatedArray);