 
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🧡 Array 🧡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// 1. 💖traverse of an array💖 

        // var fndList=["shreyas",20,"male","hanzala",18,true]

        // var list = ["omkar","shreyas", "swanand", "rahul" , "sanil" , "sahil", "suraj"]

        // console.log(list)

        // for (let index = 0; index < list.length; index++) {
        //         console.log(list[index])
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

                // list.forEach((element,index,array)=>{
                //         console.log(`elements : ${element} , index : ${index} , all data : ${array}`);
                // })

// 2. searching and filter in Array 👇 :

//      i) array.prtotype.indexOf(💖):👇
        
                // Returns the first (least) elelment within the array equal to an element , -1 if none is found. it search the element from the 0th index number

                // var list = ["omkar","shreyas", "swanand", "rahul" , "sanil" , "sahil", "suraj","rahul"]

                // console.log(list.indexOf("rahul",4)); // 2nd parameter for start searching from where  // Case sensitive

                // console.log(list.lastIndexOf("rahul",5)) //last index of serach array reaverse

                // console.log(list.includes("swanand",1))     // return true or false //forword search

//      ii) Array.prototype.find(💖) 👇  *******************

                // Only problem with find method it returns single value or undefine if not found

                // const prices = [200,300,350,400,450,500,600]

                // const Sortprices = prices.find((currVal)=>{
                //        return currVal < 400;
                // })
                // console.log(Sortprices);  
       
//      iii) findIndex(💖) 👇 ************************

                // Returns the found index in the array , if an element in the array satisfied the testing function, -1 if not found 

                // const pricesIndex = [200,300,350,400,450,500,600]

                // const SortpricesIndex = pricesIndex.findIndex((currVal)=>{
                //         return currVal < 400;
                //  })
                //  console.log(SortpricesIndex); 

//      iv) array.prototype.filter(💖) 👇 *******************

                // Returns a new array containing all elements of calling array for which the provided filtering function returns true else return empty array. 

                // const prices = [200,300,350,400,450,500,600]

                // const data = prices.filter((currData)=>{
                //         return currData >= 400;
                // })
                // console.log(data);

// 3. How to sort and compare an array : 

        // i) Array.prototype.sort(🧡) :

                // The sort method sorts the elements of array in place and returns the sorted array. The default sort order is accending , build upon converting the elements into strings.
                // Then comparing their sequence of UTF-16 code units values.

                // const months = ["jan","feb","march","dec","nov","April"] 

                // console.log(months.sort());

        // However,if number are sorted as a strings,"25" is bigger then "100", becouse "2" is bigger then "1"

                // const number = ["2","44","66","1000","1"]

                // console.log(number.sort()); 

// 4. CRUD operation : 👇

//      i) Array.prototype.push():

                // The push method adds one or more elements to the end of the array and returns the new length of array .
        
                // const animals = ['dog','cat','sheep','tiger'];

                // const count = animals.push('chicken');    // "chiken" add in array
                // console.log(count);                      // push returns length of new array 
                // console.log(animals);                   // new array 

                // const count2 = animals.push('lion','cow','monkey');  // multipal elements can add using push

                // console.log(count2);                       
                // console.log(animals);   

//      ii) Array.prototype.unshift() : 👇

                // The unshift() method adds one or more elements to the beginning of array and returns the new length of the array.

                // const animals = ['dog','cat','sheep','tiger'];

                // const count = animals.unshift('chicken');    // "chiken" adds beginning of array. 
                // console.log(count);                         // unshift returns length of new array 
                // console.log(animals);                      // new array 

//      iii) Array.prototype.pop() : 👇

                // The pop method remove the last element from an array and returns the element. This method change the length of array.

                // const animals = ['dog','cat','sheep','tiger'];

                // console.log(animals);            // old array before apply pop method
                // const count=animals.pop();      // last element of array will be removed
                // console.log(count);            // pop returns removed element
                // console.log(animals);         // array after removing last element

//      iii) Array.prototype.shift() :👇 

                // The shift method removes the first elelment from an array and returns that removed elements. This method changes the length of the array. 

                // const animals = ['dog','cat','sheep','tiger'];
                // console.log(animals);
                // console.log(animals.shift())
                // console.log(animals);

//      Array.prototype.spilce() : 👇 

                // Adds and remove elements from array.

        // ****************** splice method challenge ***********************

        // 1. add Dec at end of the array using splice
        // 2. What is the return value of the splice method 
        // 3. Update march to MARCH (update)
        // 4. Delete june from an array 

        // const months = ['jan', 'march','april','june','july'];   // don't comment

        //sol 1 : ✔

                // const newMonths = months.splice(months.length,0,'Dec')
                // console.log(months)

        //sol 2 : ✔
                // console.log(newMonths)  // splice method return empty array if add the element

        //sol 3 : ✔     
                // const indexOfMonth = months.indexOf('march')
                // if (indexOfMonth != -1) {
                //         const updateMonths = months.splice(indexOfMonth,1,"MARCH")
                //         console.log(months);
                //          console.log(updateMonths);            // return updated element
                // } else {
                //         console.log("no such data found");
                // }
                
        //sol 4 : ✔  

                // const indexOfMonth = months.indexOf('june')
                // if (indexOfMonth != -1) {
                //         const updateMonths = months.splice(indexOfMonth,1)
                ////       const updateMonths = months.splice(indexOfMonth,Infinity) // infinity deletes all data after june with june 
                //         console.log(months);
                //         console.log(updateMonths);            // return deleted element
                // } else {
                //         console.log("no such data found");
                // }

//5. map()  : 👇    //array

        // i). Array.prototype.map() :

                // let newArray = arr.map(callback(currentValue[,index[,array]]){
                        //return element for newArray, after exicuting somethig 
                // }[,thisArg]);

        // Returns a new array containing the results of calling a function on every element in this array.

        // const array1 = [1,3,5,7,9,44]
        
        // example 1
                // let newArray = array1.map((currElem,index,array)=>{
                //         return currElem > 5;
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

        // ************************* map() challenge ***********************

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

//7. Reduce(): 👇
        //reduce() is use for convert the 2D or 3D array into a single dimention array 

        //The reduce method exicutes the reducer function (that you provide ) on each element of array , resulting the single output value.

        // the reducer function takes the four arguments 
                // i.Accumulator
                // ii.Current Value
                // iii.Current Index
                // iv. Source Array
        
                // let array = [2,3,5,7,8,1,12,40]
                // var sum = 0;
                // let newArray = array.map((currElem)=>{
                //         return currElem * 2;
                // }).filter((currElem)=>{            // we can use chaining method with map()
                //         return currElem > 10
                // }).reduce((accumulator,currElem,index,array)=>{   
                //         return accumulator = accumulator + currElem   ;
                // },5) // 5 is our initial value , means the initial value of accumulator is 5    
                // console.log(newArray);

        // Converting 2D and 3D array into one Dimentional array 
                // const arr = [
                //         ['zone 1','zone 2'],
                //         ['zone 3','zone 4'],
                //         ['zone 5','zone 6'],
                //         ['zone 7','zone 8']
                // ]

                // let flatArray = arr.reduce((accumulator,currElem)=>{
                //        return accumulator.concat(currElem)
                // })
                // console.log("1D array converted succesfully",flatArray);   
                // // reduce() not able to convert nested array in 1D array



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
                // console.log(myBioData.lastIndexOf('shinde',7));  //case sensitive

        // iii. String.prototype.search(regxp) : 👇 not imp
                // The search() method searches a string for a specified value and returns the positon of the match
                // The search() mehod doesnt take 2nd parameter .
                //  if string not found returns -1

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

                // let res = str.slice(0,4);
                //// let res = str.slice(0,-2);   // if end value is -ve that means start end counting backword
                //// let res = str.slice(2);     // print all string after 2 index
                // console.log(res);

                //the slice method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

                // note : the original array will not be changed .
                
        // substring() : 👇
                // similar to slice() , Diff is substring() cannot accept -ve indexes.
                // if -ve value is added then it returns the string till first parameter.
                        // var str = 'Apple,Banana,Kiwi';
                        // let res = str.substring(5,-1 );
                        // console.log(res);

        //substr(start,length) => 👇 not imp
                // similar to slice() ,  Diff is 2nd parameter specifies the length of the extracted part.

                        // var str = 'Apple,Banana,Kiwi';
                        // let res = str.substr(-4);   // backword slice
                        // console.log(res);


// 5. Replacing String Content() : 👇
        
        //string.prototype.replace(searchFor,replaceWith)
        //The replace() method replaces a specified value with another value in a string.

        // let myBioData = 'I am omkar shinde omkar';
        // let replacedData = myBioData.replace('omkar','OMKAR') // case sensitive
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

        // window properties
        
                // history : 
                        // function goBack() {
                        //         window.history.back();
                        // }

                // location.href :

                        // alert,confirm,propt are also part of BOM 

                        // alert(location.href);   // show current url

                        // if (confirm ('want to visit xyz.com ?')) {
                        //         location.href = "xyz.com"; // redirect to this url
                        // }


// updated ...







// *********************  ECMAScript 2015 (ES6) Part 1  ******************* 
 
//👉 1. Let and const
//👉 2. template strings/literals
//👉 3. Defoult Arguments
//👉 4. Rest Operator
//👉 5. Destructing 
//👉 6. Object Properties
//👉 7. Arrow Function
//👉 8. Spread Operator
 
//  1. Let vs const vs var

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

//  2. Template literals
        // var Fname="omkar";
        // var Lname="shinde";
        // console.log(`my name is ${Fname} ${Lname} , age is ${10+11} `);


//  3. Default Arguments

        // function data(name="unknown",age=18) {
        //         console.log(`name : ${name} , age : ${age}`)
        // }
        // data("omkar",21)


//  7. fat arrow function :

        // const sum = () =>{
        //         return `sub of two numbers is ${5+4}`;
        // }
        
        // const sum=()=> `sub of two numbers is ${5+4}`

        // console.log(sum());




























































































































 










 