# javascript-notes
javascript notes

// let num = 1
// while(num <= 15){
//         console.log(num);
//         num++
// } 


// for(i=1;i<=5;i++){
//         console.log(i);
// }

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// var output = '';
// for (j = 1; j <= 5; j++) {
//         for (i = 1; i <= j; i++) {
//                 output += i + '  ';
//         }
//         console.log(output);
//         output = '';
// }

// 🔥🔥🔥🔥🔥🔥🔥JS Functions🔥🔥🔥🔥🔥🔥

// function whatShallIWear(temp){
//         if(temp<60){
//                 console.log("were jacker");
//         }else if(temp<70){
//                 console.log("were a sweater");
//         }else{
//                 console.log("were t shirt");
//         }
// }

// whatShallIWear(444) 

// --------------------------------------------------------------------------------------------------------------------------------
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 Array 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// --------------------------------------------------------------------------------------------------------------------------------

// 1. 💖traverse of an array💖 

// var fndList=["shreyas",20,"male","hanzala",18,true]

// var list = ["omkar","shreyas", "swanand", "rahul" , "sanil" , "sahil", "suraj"];

// for (let index = 0; index < list.length; index++) {
//         console.log(list[index]);
// }

//after ES6 we have for..in  and  for..of loop too👇

// for(var elements in list){
//         console.log(elements); // for in loop reaturns index number
//         console.log(list[elements]);
// }

// for(var elements of list){
//         console.log(elements); // for of loop reaturns element of array
// }

// for each loop👇
//      var list = ["omkar","shreyas", "swanand", "rahul" , "sanil" , "sahil", "suraj"];
//      const forEachValue = list.forEach((element,index,array)=>{
//      console.log(`elements : ${element}, index : ${index} , all data : ${array}`);
//      })
//      console.log("your forEach returns : ",forEachValue);  // you can't return anything from forEach it default returns keyword 'undefined'

// 2. searching and filter in Array 👇 :
// var list = ["omkar", "shreyas", "swanand", "rahul", "sanil", "sahil", "suraj", "arahul"]

//      i) array.prtotype.indexOf(💖):👇

//           Returns the first (least) elelment within the array equal to an element , -1 if none is found. it search the element from the 0th index number.
// -------------------------------------------------------------------

//          console.log(list.indexOf("rahul",3)); // serching start from 2nd argument  // Case sensitive // 2nd argument is optional

//          console.log(list.lastIndexOf("rahul",3));

//          console.log(list.includes("swanand",2))     // return true or false //forword search // start checking from 2nd argument (index).

// --------------------------- Array.prototype.lastIndexOf() ----------------------------------------

// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));
// // expected output: 3

// console.log(animals.lastIndexOf('Tiger'));
// // expected output: 1

// ------------------------------------------------------------------------------------


//      ii) Array.prototype.find(💖) 👇  *******************

//            Only problem with find method it returns single value or undefined if not found

//            const prices = [200,300,350,400,450,500,600]

//            const Sortprices = prices.find((currVal)=>{
//              if (currVal>350) {
//                 return currVal
//              }    
//            })

//          console.log(Sortprices);
//          console.log(prices);

// -------------------------------------------------------------------

//      iii) **************** findIndex(💖) 👇 ************************

//  Returns the found index in the array if an element in the array satisfied the testing function. -1 if not found

//  const pricesIndex = [200,300,350,400,450,500,600]

//  const SortpricesIndex = pricesIndex.findIndex((currVal)=>{
//      return currVal > 410;
//  })

//  console.log(SortpricesIndex);

// --------------------------- Array.prototype.findLast() ----------------------------------------

// The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

// const array1 = [5, 12, 50, 130, 44];

// const found = array1.findLast((element) => element > 45);

// console.log(found);
// // expected output: 130

// -----------------------------------------------------------------------------

//      iv) **************** array.prototype.filter(💖) 👇 *******************

//       Returns a new array containing all elements of calling array for which the provided filtering function returns true else return empty array.

//          const prices = [200,300,350,400,450,500,600]

//          const data = prices.filter((currData)=>{
//              return currData >= 400;
//           })

//          console.log(data);

// ------------------------------- Array.prototype.findLastIndex() ------------------------------------

// The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const arr = [5, 12, 50, 130, 44];

// const isLargeNumber = (element) => element > 45;

// console.log(arr.findLastIndex(isLargeNumber));
// // expected output: 3
// // Index of element with value: 130


// ------------------------------- Array.prototype.flat() ------------------------------------

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(2));
// // expected output: Array [0, 1, 2, Array [3, 4]]

// ------------------------------- Array.from()------------------------------------

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// console.log(Array.from('foo'));
// // expected output: Array ["f", "o", "o"]

// const arr = [1, 2, 3]

// console.log(Array.from(arr, x => x + x));
// // expected output: Array [2, 4, 6]


// ------------------------------- Array.prototype.includes() ------------------------------------

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true

// console.log(pets.includes('at'));
// // expected output: false

// ------------------------------- Array.isArray() ------------------------------------
// Array.isArray(value)

// // all following calls return true
// Array.isArray([]);
// Array.isArray([1]);
// Array.isArray(new Array());
// Array.isArray(new Array("a", "b", "c", "d"));
// Array.isArray(new Array(3));
// // Little known fact: Array.prototype itself is an array:
// Array.isArray(Array.prototype);

// // all following calls return false
// Array.isArray();
// Array.isArray({});
// Array.isArray(null);
// Array.isArray(undefined);
// Array.isArray(17);
// Array.isArray("Array");
// Array.isArray(true);
// Array.isArray(false);
// Array.isArray(new Uint8Array(32));
// // This is not an array, because it was not created using the
// // array literal syntax or the Array constructor
// Array.isArray({ __proto__: Array.prototype });

// ------------------------------- Array.prototype.join() ------------------------------------

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

    // const elements = ['Fire', 'Air', 'Water'];

    // console.log(elements.join());
    // // expected output: "Fire,Air,Water"

    // console.log(elements.join(''));
    // // expected output: "FireAirWater"

    // console.log(elements.join('-'));
    // // expected output: "Fire-Air-Water"

    // const str = "my name is omkar";

    // console.log(str.split(" ").join("-"));
    // // output :  my-name-is-omkar

// ------------------------------- Array.prototype.join() ------------------------------------

// 3. How to sort and compare an array :

// i) Array.prototype.sort(🧡) :

//      The sort method sorts the elements of array in place and returns the sorted array. The default sort order is accending , build upon converting the elements into strings. // uppercase has priority
//      Then comparing their sequence of UTF-16 code units values.

// const months = ["b","d","c","a","F","E","A"];
// console.log(months.sort());

// -------------------------------------------------------------------

// However,if number are sorted as a strings,"25" is bigger then "100", becouse "2" is bigger then "1".

//      const number = ["2","25","66","100","7","1"];

//      console.log(number.sort());

// -------------------------------------------------------------------

// 4. CRUD operation : 👇

// i) Array.prototype.push():

//      The push method adds one or more elements to the end of the array and returns the new length of array.

//  const animals = ['dog','cat','sheep','tiger'];

//  const count = animals.push('chicken');    // "chiken" add in array
//  console.log(count);                      // push returns length of new array
//  console.log(animals);                   // new array

//  const count2 = animals.push('lion','cow','monkey');  // multipal elements can add using push

// console.log(count2);
// console.log(animals);

// -------------------------------------------------------------------

//      ii) Array.prototype.unshift() : 👇

// The unshift() method adds one or more elements to the beginning of array and returns the new length of the array.

// const animals = ['dog','cat','sheep','tiger'];

// const count = animals.unshift('chicken');    // "chiken" adds beginning of array.
// console.log(count);                         // unshift returns length of new array
// console.log(animals);                      // new array

// -------------------------------------------------------------------

//      iii) Array.prototype.pop() : 👇

// The pop method remove the last element from an array and returns the element. This method change the length of array.

// const animals = ['dog','cat','sheep','tiger'];

// console.log(animals);            // old array before apply pop method
// const count=animals.pop();      // last element of array will be removed
// console.log(count);            // pop returns removed element
// console.log(animals);         // array after removing last element

// -------------------------------------------------------------------

//      iii) Array.prototype.shift() :👇

//          The shift method removes the first elelment from an array and returns that removed elements. This method changes the length of the array.

//             const animals = ['dog','cat','sheep','tiger'];
//             console.log(animals);
//             console.log(animals.shift())
//             console.log(animals);

// -------------------------------------------------------------------

//  Array.prototype.spilce() : 👇

// Add and remove elements from array.


// const months = ['jan', 'march', 'april', 'june', 'july'];

// 1. add Dec at end of the array using splice

//  const newMonths = months.splice(months.length,0,'Dec')      // replaceble with push but returns empty array and push returns updated arr length.
//  console.log(months)
//  console.log("newMonths",newMonths)

// ---------------------

// 2. What is the return value of the splice method

//          console.log(newMonths)  // splice method return empty array if add the element

// ---------------------

// 3. Update march to MARCH (update)

//          const indexOfMonth = months.indexOf('march')
//          if (indexOfMonth != -1) {
//                  const updateMonths = months.splice(indexOfMonth,1,"MARCH")
//                  console.log(months);
//                  console.log(updateMonths);            // return updated element
//          } else {
//                  console.log("no such data found");
//          }       

// ---------------------

// 4. Delete june from an array

//      const indexOfMonth = months.indexOf('june')
//      if (indexOfMonth != -1) {
//              const updateMonths = months.splice(indexOfMonth,1)
//              const updateMonths = months.splice(indexOfMonth,Infinity) // infinity deletes all data after june with june
//              console.log(months);
//              console.log(updateMonths);            // return deleted element
//      } else {
//             console.log("no such data found");
//      }

// ------------------------------ Array.at() 👇 -------------------------------------

// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// const array1 = [5, 12, 8, 130, 44];

// let index = 2;

// console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// // expected output: "Using an index of 2 the item returned is 8"

// index = -2;

// console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// // expected output: "Using an index of -2 item returned is 130"


// ------------------------------ Array.concat() 👇-------------------------------------

//      The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array

//      const array1 = ['a', 'b', 'c'];
//      const array2 = ['d', 'e', 'f'];
//      const array3 = array1.concat(array2);

//      console.log(array3);

//      expected output: Array ["a", "b", "c", "d", "e", "f"];

// ---------------------------- Array.prototype.entries() ---------------------------------------

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// const array1 = ['a', 'b', 'c'];

// ------- eg.1------


// console.log(iterator1.next().value);
// // expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // expected output: Array [1, "b"]

// ------- eg.2- Iterating with index and element -----

// const a = ["a", "b", "c"];

// for (const [index, element] of a.entries()) {
// console.log(index, element);
// }

// 0 'a'
// 1 'b'
// 2 'c'

// ------- eg.3 - with Object ----- #imp

// const obj = {
//     name: "omkar",
//     age: "20",
//     country: "india"
// };

// Object.entries(obj).forEach(([key, value]) => {  // ES-8
//     console.log("key:",key,"value:",value);
// } );

// key: name value: omkar
// key: age value: 20
// key: country value: india


// ----------------------------- Array.prototype.fill() --------------------------------------

// const array1 = [1, 2, 3, 4];

// // Fill with 0 from position 2 until position 4
// console.log(array1.fill("👇", 2, 4));
// // expected output: Array [1, 2, 👇, 👇]

// // Fill with 5 from position 1 until last ele
// console.log(array1.fill(5, 1));
// // expected output: Array [1, 5, 5, 5]

// console.log(array1.fill(6));  // in all
// // expected output: Array [6, 6, 6, 6]

// ----------------------------- Array.prototype.fill() --------------------------------------

// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

//5. map() : 👇 //array

// i). Array.prototype.map() :`

// Returns a new array containing the results of calling a function on every element in this array.

// const array1 = [1, 3, 5, 7, 9, 44]

// example 1

// let newArray = array1.map((currElem,index,array)=>{

//         if (currElem==9) {      /// for update any array element
//                 return "omkar"
//         }
//         return currElem
// })
// console.log(array1);
// console.log(newArray);

// example 2
// let newArray = array1.map((element,index,array)=>{
//         return `elements : ${element} , index : ${index} , from array : ${array}`;
// })
// console.log(newArray); //It returns new array without mutating the original array

// Diff btwn forEach and Map :

// 1. forEach method return the 'undefined' and map method returns new array
// 2. map have ability to chain other methods eg.  ....}).reduce().filter()
// 3. map have ability to update array element

// ---------------------------- map() challenge ---------------------------------------

// Que 1. Find the square root of each element in an array ?
// Que 2. multiply Each element by 2 and return only those elements which are greater then 10

// sol :
// let array = [25,64,36,49,81]

// let arrSqrt = array.map((currElem)=>{
//         return Math.sqrt(currElem)
// })
// console.log(arrSqrt);

// sol 2. :
// let array = [2,3,5,7,8,1,12,55]

// let newArray = array.map((curr)=>{
//         return curr * 2;
// }).filter((currElem)=>{            // we can use chaining method with map()
//         return currElem > 10
// })

// console.log(newArray);

// ------------------------------ Array.reduce() -------------------------------------

//7. Reduce(): 👇

//The reduce method exicutes the reducer function (that you provide ) on each element of array , resulting the single output value.

// the reducer function takes the four arguments
// i.Accumulator
// ii.Current Value
// iii.Current Index
// iv. Source Array

// let array = [5,10,15,20]
// var sum = 0;
// let newArray = array.reduce((accumulator,currElem,index,array)=>{
//         return accumulator = accumulator + currElem ;
// },0) // 5 is our initial value , means the initial value of accumulator is 5
// console.log("newarry",newArray);

// let num = 0;
// let addi = array.map((val)=>{
//        return num = num + val
// })
// console.log("num",num);
// console.log(addi);

// ------------------------------- Array.prototype.some() ------------------------------------ #imp

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// const array = [1, 2, 3, 4, 5];

// // Checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // expected output: true

// ----------------------------- Array.prototype.every() -------------------------------------- #imp

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// const isAdult = (currentValue) => currentValue.age > 18;

// const array1 = [1, 30, 39, 29, 10, 13];
// const people = [
//     {
//         name: "omkar",
//         age: 17,
//     },
//     {
//         name: "aniket",
//         age: 30,
//     }
// ]

// console.log(people.every(isAdult));  // it will return 'true' if all people age is greter then 18


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 Strings in Javascript 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// 👉 Escape Charactor
// 👉 Finding a string in a string
// 👉 searching string for a string
// 👉 extracting string parts
// 👉 extracting String parts
// 👉 Replacing String Content
// 👉 Extracting String Character
// 👉 Other Useful Methods


//  strings in javascript

// A javascript string is written inside quotes
// javascript string is used for sorting and manipulating text.
// you can use single or double quotes
// String can be created as primitives, from string literals , or objects using the string() constructor
//eg.
// var name = "omkar shinde";
// console.log(name);

//1. String.prototype.length :👇
// it used for find the length of the string.

// let myName = 'omkar shinde';
// console.log(myName.length);

//2. Escape Charactor :👇

// anySentence = "hello "world" javascript";      //wrong
// anySentence = "hello \"world\" javascript";   //right way
// anySentence = 'hello "world" javascript';  // best way
// anySentence = "hello 'world' javascript";  // best way

// console.log(anySentence);

//3. Finding a string in string : 👇

// i. String.indexOf() 👇
// if string not found returns -1
// String.indexOf(searchString: string, position?: number)

// const myBioData= "i am omkar shinde omkar";
// console.log(myBioData.indexOf('omkar',6));  //case sensitive

// ii. String.lastIndexOf()👇
// if string not found returns -1
// lastInxex() search string backword direction

// const myBioData= "i am omkar 11 shinde";
// console.log(myBioData.lastIndexOf('shinde',2));  //case sensitive

// iii. String.prototype.search(regxp) : 👇
// The search() method searches a string for a specified value and returns the positon of the match
// The search() mehod doesnt take 2nd parameter .
// if string not found returns -1

// const myBioData= "i am omkar 11 shinde";
// console.log(myBioData.search('shinde'));  //case sensitive

// 4. String extraction parts : 👇

// There are 3 methods in extracting a part of a string :
// 👉 1. slice(start,end)
// 👉 2. substring(start,end)
// 👉 3. substr(start,length)

// slice() : 👇
// slice() extract the part of a string and returns the extracted part in a new string.

// The method takes 2 parameters : start position and end position (end not included)

// var str = 'Apple,Banana,Kiwi';

// let res = str.slice(0,5);
// let res = str.slice(0,-2);   // if end value is -ve that means start end counting backword
// let res = str.slice(2);     // print all string after 2 index
// console.log(res);

//the slice method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

// note : the original string will not be changed .

// substring() : 👇
// similar to slice() , Diff is substring() cannot accept -ve indexes.
// if -ve value is added then it returns the string till first parameter.

// var str = 'Apple,Banana,Kiwi';
// let res = str.substring(6,-1 );
// console.log(res);

//substr(start,length) => 👇
// similar to slice() ,  Diff is 2nd parameter specifies the length of the extracted part.

// var str = 'Apple,Banana,Kiwi';
// let res = str.substr(4);   // backword slice
// console.log(res);


// 5. Replacing String Content() : 👇

//string.prototype.replace(searchFor,replaceWith)
//The replace() method replaces a specified value with another value in a string.

// let myBioData = 'I am omkar shinde omkar';
// let replacedData = myBioData.replace('omkar','om') // case sensitive
// console.log(replacedData);

// points to remember
//1. the replace() method dees not change the string it is called on. It return new string.
//2. by default the replace method replaces only first match

// 6. Extraction String charactor : 👇
// 3 methods for extracting charactor:
// charAt(position)
// charCodeAt(posion)
// Property access [ ]

// i. The charAt() : 👇
// the charAt method returns the character at a specified index (position) in a string.

// let str = 'hello world';
// console.log(str.charAt(0));

//ii. charCodeAt() : 👇
//the charCodeAt method rerurn the unicode of the charactor at a specified index in astring:
// charactor at a specified index in string :
// the method rerurn a UTF-16 code . interger between 0 and 65525.

// var str = 'hello world'
// console.log(str.charCodeAt(1));  // print unicode of 1st index

//iii. Property Access :  👇
//ECMA script 5 allows proprty accesss [ ] on strings
// let str = 'hello world';
// console.log(str[1]);

// 7. Other usefull methods :  👇

// let myName= "omkar SHINDE";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// ii. concat() : 👇
// let fName = "omkar";
// let lName = "shinde";

// console.log(fName + lName);
// console.log(fName.concat(lName));
// console.log(fName.concat(" ",lName));
// console.log(`first name is ${fName} last name is ${lName}`);

//iii. string.trim() : 👇
//trim() remove extra space of start and end of string
// let myName= "                omkar shinde";
// console.log(myName);
// console.log(myName.trim());   //trimed

//iv. split() : 👇 convert string to array.

// var txt = "a,b | c, d,e"              //string
// console.log(txt.split());
// console.log(txt.split(","));        // plit on commas
// console.log(txt.split(" "));       // split on spaces
// console.log(txt.split("|"));      // spit on bar

//v. date and time in js : 👇
// 4 ways to create new date object
// i.new Date()
// ii. new Date(year, month, day, hours, minutes, secounds, millisecounds) //takes 7 arguments
// iii. new Date(millisecounds)   //we cant avoid month section
// iv. new Date(date string)

// new Date() : 👇
// data object are created with the new Date() constructor.

// let currDate = new Date();

// let currDate = new Date().toLocaleString()

// let currDate = new Date().toString()

// console.log(currDate);

// Date.now() :  returns millisecounds👇

// console.log(Date.now());

// new Date(year,month.....) 👇

// js count month form 0 to 11.

// var d = new Date(2000,5,22, 5, 55, 4, 44)
// console.log(d);

// var d = new Date(dateString) : 👇

// var d = new Date("june 22,2000 11:11:11")
// console.log(d.toLocaleString());


// new Date(millisecounds) : since 1 jan 1970
//  var d = new Date(34343434343)
//  console.log(d.toLocaleString());

// get Date methods : 👇

// const curDate = new Date();

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());  // month start from 0 to 11
// console.log(curDate.getDate());
// console.log(curDate.getDay());  // 0 means sunday

// set date methods :

// const curDate = new Date();

// console.log(curDate.setFullYear(2021,10,3));
// console.log(curDate.setMonth(....));  /
// console.log(curDate.getDate(..));
// console.log(curDate.getDay(....));

// get time and set time : (same as date )

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡javascript math object 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


//console.log(Math.PI);

// let num = 10.34;
// console.log(Math.round(num));  // it rounded to its nearest intiger

// console.log(Math.pow(3,3)); //or
// console.log(3**3);     // power of number

// console.log(Math.sqrt(25));   // square root of the number

// Math.abs() :
// console.log(Math.abs(-33));   // conver -ve value to +ve
// console.log(Math.abs(3-5));

// Math.ceil() :

// console.log(Math.round(4.21));
// console.log(Math.ceil(-4.21));  // ceil returns the next intiger

// Math.floor():
// console.log(Math.floor(-33.23));     // its remove the decimal value
// returns the next value

// Math.min() :
// Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(44,66,88,33,9,2,545));

// Math.max() :
// Math.min() can be used to find the largest value in a list of arguments

// console.log(Math.max(44,66,88,33,9,2,545));

// Math.rondom() :
// const result = Math.random()*10   // returns ramdom number between 0-10
// console.log(Math.floor(result));

// Math.trunc() :
// the trunc() method returns the integer part of a number

//  console.log(Math.trunc(4.6));
//  console.log(Math.trunc(-8.46));

// Note : if the argument is a positive number , Math.trunc() is equivalent to Math.floor() .
// otherwise Math.trunc() is equivalent to Math.floor().

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 DOM in javascript 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// 👉 Window vs Document
// 👉 DOM vs BOM
// 👉 DOM Navigation
// 👉 Searching and getting Element Reference

// window properties 👇

// history :
// function goBack() {
//         window.history.back();
// }

// location.href :

// alert,confirm,propt are also part of BOM

// alert(location.href);   // show current url

// if (confirm ('want to visit xyz.com ?')){
//         location.href = "xyz.com"; // redirect to this url
// }



// 1: document.documentElement
// returns the element that is the root element of the document.
// 2: document.head

// 3: document.body

// 4. document.body.childNodes (include tab, enter and whitespace) list of the direct children only

// 5. document.children (without text nodes, only regular elements)

// 6. document.childNode.length

// 7. document.querySelector('.className')

// 8. document.getElementById()
// 8. document.getElementsByClassName()
// 10. document.getElementsByTagName()


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 Events in javascript 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// example :
//  HTML web page has finished loading .
//  HTML input field was changed.
//  HTML button was clicked.
// offen, when events happen , you may want to do something .

// javascript lets you executes code when events are detected.

// HTML allows events handler attributes, with javascript code , to be added to HTML element.

// section1️⃣ : 4 ways of writing Events in javascript. 👇

// mouse evets => onclick, onmouseover, onmouseout, onmousedown, onmouseup, onmousemove
// keybord     => onkeydown, onkeyup
// form        => onfocus,onsubmit,onblur,onchange
// Window/Document => onload, onunload, onresize


// 1. using inline events alert() : 👇

// 2. By clicking a function :👇 (most common property)

// <button onclick="secoundWay()">click me</button>

// function secoundWay() {
//         alert('most common way of writing fuction')
// }

// 3. using inline events  : 👇

// <button id="thirdWay">3rd way</button>

// const thirdWay  = document.getElementById('thirdWay')

// thirdWay.onclick = function() {
//         alert('most common way of writing fuction')
// }

// it does overwrite the event you can not use multiple funtion with one refrence

// in this mehtod only one funtion will be called i.e. consonle.log

// thirdWay.onclick = function() {
//     console.log('most common way of writing fuction')
//}

// 4. using event listners : 👇 (addEventListener )

// <button id="fourthWay">fourthWay</button>

// const fourthWay = document.querySelector('#fourthWay')

// fourthWay = addEventListener('click',()=>{
//         alert('i love this way of writting funcion')
// })

// it does not overwrite the event you can use multiple funtion with one refrence
// in this mehtod both alert and console funtion will be called

// fourthWay = addEventListener('click',()=>{
//         console.log('i love this way of writting funcion')
// })



// Section 2️⃣ : what is Event object ? 👇

//  Event object is the parent object of event object.
// for example .
// mouseEvent,foucusEvent,keybordEvent etc

// section 3️⃣ : MouseEvent in javascript - 👇

// The mouseEvent object
// Events that occur when the mouse interacts with the HTML document belongs to the MouseEvent Object.

// 1. mouseDown()
// 2. mouseUp()
// 3. mouseenter()
// 4. mouseleave()

// section 4️⃣ : KeyboardEvent in js 👇

// 1. OnKeyPrass()
// 2. OnKeyDown()
// 3. OnKeyUp()

// Section 5️⃣ : Input Events in js 👇
// onChange()

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 Timing Based Events in js 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// 👉 setTimeout()    :
// 👉 setInterval()   :
// 👉 clearTimeout()  :
// 👉 clearInterval() :


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 Js Object Literals 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// what is object literals?
// object literal is simply a key:value pair data structure.
// storing variables and fuctions together in one container, we can refer this as an objects.

// object is like school bag

// How to create an object ?
// ✅ 1st way :
// let bioData = {
//         name : "omkar shinde",
//         age : "20",
//         getData : function() {
//                 console.log(`my name is ${bioData.name} and age is ${bioData.age}`);
//         }
// }
// console.log(bioData.name);
// bioData.getData()

// ✅ 2nd way :  no need to write function as well after ES6

// let bioData = {
//         name : "omkar shinde",
//         age : "20",
//         getData(){
//                 console.log(`my name is ${bioData.name} and age is ${bioData.age}`);
//         }
// }
// bioData.getData()

// ✅ what if we want object as a value inside an object .

// let bioData = {
//         name :{
//                 firstName : "omkar",
//                 lastName : "shinde"
//         },
//         age : "20"
// }
// console.log(bioData.name.firstName);


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 "this" Object 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

//👉 The defination of this object is that it contain the current context .

// the this object can have diffrent values depending on where it is placed.

// example 1 : 👇

// console.log(this);

// it refers to the current context and that is window global object
// eg 2 : 👇

// function myName() {
//         console.log(this);
// }
// myName()



// eg 3 : 👇

// var name = 'omkar';
// function myName() {
//         console.log(this.name);
// }
// myName()     // try in browser

//eg 4 : 👇

// const obj = {
//         age : 20,
//         myName(){
//         console.log(this);
//         }
// }
// obj.myName()

//👉 note : this object is not working in fat arrow function.

//  let bioData = {
//          Name:{
//                 fName : "omkar",
//                 lName : "shind"
//         },
//         myAge : 21,
//         getData (){
//                 console.log(`My name is ${this.Name.fName} ${this.Name.lName} and my age is ${this.myAge}`);
//         }
//  }
//  bioData.getData()

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 ECMAScript 2015 (ES6) 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

//👉 1. Let and const
//👉 2. template strings/literals
//👉 3. Defoult Arguments
//👉 4. Arrow Function
//👉 6. Destructing
//👉 8. Spread Operator
//👉 7. Object Properties
//👉 5. Rest Operator

//  1. Let vs const vs var : 👇

// var = function scope
// let and const = block scope

// onece we assign value to const we can not update this value

// function data() {
//         var Fname="omkar";

//       if (true) {
//         var Lname="shinde";
//         console.log("first name : " + Fname);
//       }

//       console.log("last name is : " + Lname);
// }
// data()

//  2. Template literals : 👇

// var Fname="omkar";
// var Lname="shinde";
// console.log(`my name is ${Fname} ${Lname} , age is ${10+11} `);


//  3. Default Arguments : 👇

// function data(name="unknown",age=18) {
//         console.log(`name : ${name} , age : ${age}`)
// }
// data("omkar",21)


//  4. fat arrow function : 👇

// const sum = () =>{
//         return `sub of two numbers is ${5+4}`;
// }

// const sum=()=> `sub of two numbers is ${5+4}`

// console.log(sum());


// 5. Destructing in ES6 : 👇
// The destructuring assingnment syntax is a javascript expression that makes it possible to unpack value from arrays, or properties from object , into distict variables.

//1. Array Destructuring :

// const myBioData = ['omkar','shinde',21];

// // old method :👇

//         let fName = myBioData[0];
//         let lName = myBioData[0];
//         let age = myBioData[0];
//         console.log(fName);

// //destruction :👇

//         let [fistName,lastName,myAge] = myBioData;
//         console.log(fistName);

//         // we can add values too
//                 let [fistName1,lastName1,myAge1, degree="MSC IT"] = myBioData;
//                 console.log(degree);

//2.Object Destruction:👇

//   const bioData = {
//                 fName : "omkar",
//                 lName : "shinde",
//                 age : 20,
//         }

// // old method :👇

// let fName =bioData.fName
// let lName = bioData.lName
// let age = bioData.age
// console.log(age);

// //destruction :👇

// let {fName,lastName,myAge} = bioData;
// console.log(fName);

// // we can add values too
//         let {fistName1,lastName1,myAge1, degree="MSC IT"} = bioData;
//         console.log(degree);

// 6. Object Properties : 👇

//👉we can now use Dynamic Properties
// const age = "omkarAge"
// const bioData = {
//                         fName : "omkar",
//                         lName : "shinde",
//                         [age] : [18+3],   // we can perform math opration inside []
//                 }
// console.log(bioData);

//👉No need to write key and value, if both are same :

// let fName = "omkar";
// let lName = "shinde"
//  const bioData = {
//                         fName,
//                         lName,
//                         age : [18+3]
//                 }
// console.log(bioData);

// 7. Spread Operator

// const colors = ['red','green','blue'];

// // 2nd time add one more color on top and tell we need to write it

// const myFevColor = [...colors,'yellow','black']

// console.log(myFevColor);


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 ECMAScript 2016 (ES7) 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// 1. Array Include : 👇
// const colors = ['red','green','blue']
// const isPresent = colors.includes('red'); // if red is present in colors array then return true else false
// console.log(isPresent);

//2. Exponetial operator : 👇 (**)

// console.log(2**4);  // 2*2*2*2




// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 ECMAScript 2017 (ES8) 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// 1.👉 String padding

// let name = 'omkar';
// console.log(name.padStart(88));
// console.log(name.padEnd(88));

// 2.👉 Object.value()

// const person = {name:'omkar', age:'21'}
// console.log(Object.values(person));   // only values are return

// 3.👉 Object.entries()

// const person = {name:'omkar', age:'21'}
// console.log(Object.entries(person));

//4.👉 Async Await :



// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 ECMAScript 2018 (ES9) 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

//  spread operator for object

// const person = {name:'omkar', age:'21'}
// const person2 = {...person}

// console.log(person);
// console.log(person2);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 ECMAScript 2019 (ES10) 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


//1.👉 Converting 2D and 3D array into one Dimentional array
// const arr = [
//         ['zone 1','zone 2'],
//         ['zone 3','zone 4'],
//         ['zone 5','zone 6'],
//         ['zone 7','zone 8',['omkar','shinde']]
// ]
// console.log(arr.flat(Infinity));   // set parameter for level of converting , use 'infinity' of infinite level

// 2.👉 Object.fromEntries()

// const person = {name:'omkar', age:'21'}
// const newPerson = Object.entries(person)
// console.log("entities",newPerson);

// console.log("fromEntities", Object.fromEntries(newPerson));




// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 ECMAScript 2020 (ES11) 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// 1. BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;

// console.log(oldNum   );


// 2. Nullish coalescing


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 ECMAScript 2021 (ES12) 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// const stringText = "Javascript is the best web scripting language. Javascript can be used for both front end and backend";

// console.log(stringText.replace("Javascript", "Typescript"));

// console.log(stringText.replaceAll("Javascript", "Typescript"));


// Private Accessors

// class privateaccessors {
//         name(){
//                 console.log('my name is omkar');
//         }
//          #age(){
//                 console.log('age is 21');
//         }

//        get details(){
//                 console.log(this.age());
//         }
// }

// person = new privateaccessors();

// person.name()
// // person.age()   // can't access age
// person.details()

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡Advance Javascript 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

//👉 Funtion Statement OR function declaration : -

// funtion a(){
//         console.log("hello world");
// }

//👉 Funtion expression :-

// Function Expression  allows us to create an anonymous function which doesn’t have any function name which is the main difference between Function Expression and Function Declaration.
// A function expression has to be stored in a variable and can be accessed using variableName.  With the ES6 features introducing Arrow Function, it becomes more easier to declare function expression.

// const a = function(){
//         console.log("hello world");
// }

// the main diffrence bitween funtion expression and declaration is "hoisting"

//👉 Named Funtion expression :-

// let variableName = function functionName(x, y)
// {
//         console.log("named function expression");
// };

// variableName()

//👉Anonomus Funtion :-

// Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

// An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.

// we can pass anonomous funtion as argument.


// function() {
//         // Function Body
// }


//👉First Class Funtion OR First Class Citizen

// If any programming language has the ability to treat functions as values, to pass them as arguments and to return a function from another function then it is said that  programming language has First Class Functions and the functions are called as First Class Citizens in that programming language.

// function sayHello() {
//         return "Hello, ";
// }
// function greeting(helloMessage, name) {
//         console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript!");

//👉 Arrow Functions :


//👉 Callback Function :

// function which get passed as an argument to another function is called CDF.
// A callback function is a function that is passed as an argument to another function , to be "called back " at a letter time



// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// 5.👉 Hoisting in javascript :

// Hoisting in javascript is a machanism where variable and functions declaration are moved to the top of there scope before the code execute.

// Conceptually hoisting is often presented as the interpreter "splitting variable declaration and initialization, and moving (just) the declarations to the top of the code". This allows variables to appear in code before they are defined. Note however, that any variable initialization in the original code will not happen until the line of code is executed.





// 1.👉Event Propogation :
// i. Capture phase
// i. Bubble phase

//event.stopPropagation()   // use for stop propogation

// 2.👉 Higher Order Function :
// function which takes another function as an arguments is called HOF .

// 3.👉 Callback Function :

// function which get passed as an argument to another function is called CDF.
// A callback function is a function that is passed as an argument to another function , to be "called back " at a letter time

// function first(secound){
//         setTimeout(() => {
//                 console.log("first");
//                 secound()
//         }, 4000);

// }
// first( function secound (){
//         setTimeout(() => {
//                 console.log("secound");
//         }, 1000);
// })

//Problem =>
// const people = [{name:"omkar",age:21},{name:"shrikant",age:28}]

// const addPeople =(newPeople)=>{

//         setTimeout(() => {
//                 people.push(newPeople)
//         }, 1000);

// }

// const getPeoples =()=>{
//         console.log(people);
// }

// addPeople({name:"aniket",age:27});
// getPeoples()

// solution using callbacks :


// const people = [{ name: "omkar", age: 21 }, { name: "shrikant", age: 28 }]

// const addPeople = (getPeoples, newPeople) => {

//         setTimeout(() => {
//                 people.push(newPeople)
//                 getPeoples()
//         }, 2000);
// }

// const getPeoples=()=>{
//         console.log(people)
// }

// addPeople(getPeoples, { name: "aniket", age: 27 });


// **************** solution using Promises :***************

// const people = [{ name: "omkar", age: 21 }, { name: "shrikant", age: 28 }]

// const getPeoples = () => {

//         people.map((val) => {
//                 console.log(val.name);
//         })

// }

// function addPeople(newPeople) {

//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         people.push(newPeople)

//                         let error = false;
//                         if (!error) {
//                                 resolve("promise resolve")
//                         } else {
//                                 reject("promise reject")
//                         }
//                 }, 2000);

//         });
// }

// addPeople({ name: "aniket", age: 27 })
// .then((successmsg)=>{
//         console.log(successmsg);
//         getPeoples()
// })
// .catch(err => console.log(err));


//        const a = fetch("https://reqres.in/api/products/3")   // check in browser
//        .then(res => res.json())
//        .then(data=>console.log(data))
//        .catch((err)=>console.log(err));

// **************** solution using async await :***************


// const people = [{ name: "omkar", age: 21 }, { name: "shrikant", age: 28 }]

// const getPeoples = () => {
//         setTimeout(() => {
//                 people.map((val) => {
//                         console.log(val.name);
//                 })
//         }, 1000);


// }

// function addPeople(newPeople) {
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         people.push(newPeople)

//                         let error = false;
//                         if (!error) {
//                                 resolve("promise resolve")
//                         } else {
//                                 reject("promise reject")
//                         }
//                 }, 2000);

//         });
// }

// AddPeople()
// getPeoples()

// const Wait = async()=>{
//         try {
//                const msg = await addPeople({ name: "aniket", age: 27 })
//                console.log(msg);
//                 getPeoples()
//         } catch (error) {
//                 console.log(error);
//         }
// }

// Wait()



// for (var i = 0; i < 4; i++) {

//         setTimeout(() => {
//                 console.log('hello',i);
//         },1000);

// }




// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//  Call , Appy and Bind


// let obj1 = {
//         name:"omkar",
//         lastname:"shinde",
//     }

//     let obj2 = {
//         name: "akash",
//         lastname:"shinde"
//     }

//     let Details = function(age){
//         console.log(`first name ${this.name} , last name ${this.lastname}, age : ${age}`);
//     }


//     Details.call(obj1,21);




// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥prototype🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


// function Person(name, age) {
//   this.name = name,
//     this.age = age,

//     this.getName = function () {
//       return `my name is ${this.name}`;
//     }
// }

// const person1 = new Person("omkar", 22);
// const person2 = new Person("vinit", 32);

// console.log(person1);
// console.log(person2);

// Person.prototype.getAge = function () {
//   return `age is ${this.age}`;
// }

// console.log(person1.getAge());





// Array.prototype.addition = function () {
//         let sum = 0;
//         this.map(element => {
//                 sum = sum + element;
//         });

//         return sum;
// }

// let arr = [5,5,5,2];

// console.log(arr.addition());




// Array.prototype.myreduce = function (cb, initialValue) {


//         for (let i = 0; i < this.length; i++) {

//                 cb(initialValue, this[i], i);

//                 if (i == this.length - 1) {
//                         return cb(initialValue, this[i], i);
//                 }
//         }

// }


// let arr = [1, 2, 3, 4];

// const result = arr.myreduce((accumulator, currVal, index) => {

//         console.log(`accum is ${accumulator} , currVal is ${currVal} , index is ${index}`);

//         return accumulator = accumulator + currVal;

// }, 0);

// console.log(result);



// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  Set() 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// const mySet1 = new Set()

// mySet1.add(1)
// mySet1.add('some text')

// const obj = { a: 1, b: 2 }

// mySet1.add(obj)

// mySet1.delete(1)
// mySet1.has(5)
// mySet1.size

// // console.log(mySet1)


// // for (let item of mySet1) console.log(item)

// // const myArr = Array.from(mySet1)

// // console.log(myArr);

// const mySet2 = new Set([1, 2, 3, 4])
// const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))
// console.log(intersection);




// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


