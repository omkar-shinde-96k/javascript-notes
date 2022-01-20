// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 Liner Search Algorithm 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// const arr = ["omkar","vinit","aniket","rahul","suraj"];

// const isExist = (arr,name)=>{
//     for(elements of arr){
//         if (elements == name) {
//             return true;
//         }
//     }
//     return false;
// }

// const result = isExist(arr,"rahul");

// console.log(result);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 Binary Search Algorithm 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// const arr = [1,2,3,4,5,6,7,8,9,10];

// let StartIndex = 0;
// let EndIndex = arr.length -1;
// let MiddleIndex = Math.floor((StartIndex + EndIndex)/2);
// const BinarySearch=(arr,num)=>{

//     while(arr[MiddleIndex] !== num && arr[EndIndex] > num){
//      if (arr[MiddleIndex] > num) {
//          EndIndex = MiddleIndex -1;
//      }else{
//          StartIndex = MiddleIndex + 1;
//      }
//      MiddleIndex = Math.floor((StartIndex + EndIndex)/2); 

//     }
//     return arr[MiddleIndex]===num? true :false
// }

// const result = BinarySearch(arr,6);
// console.log(result);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 Binary Search Algorithm 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥




// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 Que 1 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// Que 1 = >   [3,5,7,2,8] => min number

// function FindMin(arr) {        // ans 1
//     let sa = arr.sort();
//     console.log("min", sa[0]);
//     return sa[0];
// }

// FindMin([3, 5, 7, 2, 8, 0])


// function FindMin(arr) {
//     let currMin = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < currMin) {
//             currMin = arr[i];
//         }
//     }
//     return currMin;
// }
// const min = FindMin([3])
// console.log(min);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 Que 2 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// Que 2 => [3,5,6,5,3];  => {3:2,5:2,6:1}

// const find = (array) => {
//     let output = {};
//     for (let i = 0; i < array.length; i++) {
//         output[array[i]] = (output[array[i]] || 0) + 1;
//     }

//     console.log(output);
// }
// find([3, 5, 6, 5, 3])


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 Que 3 (anagram) 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// Que = > How to check a given string is an anagram of another string in JavaScript ? (charactors of all array should be equal)

// using inbuild function 👇

// function checkStringsAnagram(a, b) {

//     let str1 = a.split('').sort().join("");
//     let str2 = b.split('').sort().join("");

//     if (str1 === str2) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// checkStringsAnagram("abfa", "aab");

// without inbuild function 👇


// function check(a, b) {

//     let output = {};

//     for (let i = 0; i < a.length; i++) {
//         output[a[i]] = (output[a[i]] || 0) + 1;
//     }

//     console.log("1", output);

//     for (let j = 0; j < b.length; j++) {

//         console.log(output[b[j]]); 

//         output[b[j]] = output[b[j]] - 1;
//         console.log("2", output);

//     }
 
//     return true;

// }

// console.log(check("omkarr", "omkarr"))





