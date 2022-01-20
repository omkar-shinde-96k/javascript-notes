//  const User = [{name:"omkar",age:21},{name:"aniket",age:22}]
 

//  getUser=()=>{
//      setTimeout(() => { 
//      console.log(User);
//      }, 1000);
//  }

//  addUser=(newUser)=>{
//      return new Promise ((resolve,reject)=>{
//         setTimeout(() => { 
//             User.push(newUser)
//             resolve()
//         }, 2000);
//      })

//  }

//  addUser({name:"rahul",age:33}).then(getUser)





// const str = "hello";
// const output = [];
// output.push({ [str[0]]: 1 })

// for (let i = 1; i < str.length; i++) {
//    console.log(str[i]);
//     for (let j = 0; j < i; j++) {

//         console.log("i is =>", str[i]);
//         console.log("j is =>", Object.keys(output[j])[0]);

//         const Jkey = Object.keys(output[j])[0];
//         console.log("j", Jkey);

//         if (str[i] == Jkey) {
//             console.log("value exist");

//             console.log("Jkey",Jkey);  
//             const temp = output[j];
           
//             console.log("output",temp.Jkey);

//             break;
//         } else { 

//             if (j == output.length - 1) {
//                 output.push({ [str[i]]: 1 })
//                 console.log("value unique added",str[i]);
//                 break;
//             }
//         }

        // console.log(output[j]);
        // if (output[i] !== str[i]) {

        //     output.push({ [str[i]]: 1 })

        // } else {
        //     console.log("else");
        // }
//     }

// }
// console.log("final output", output);





//outoput : 
// json={
//     h:1,
//     e:1,
//     l:2,
//     o:1
// }

 









