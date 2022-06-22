console.log("loops");
// loops
let arr = ['a','b','c','d','e','f','g','h','i']
 console.log(arr[0]);
 console.log(arr[1]);
 console.log(arr[2]);
 console.log(arr[3]);
 console.log(arr[4]);
 console.log(arr[5]);
 console.log(arr[6]);
 console.log(arr[7]);

 //exercise
 let loop = 0
 for (let i =0;i<=15;i++){
     let remainer=i % 2;
     if (remainer===0){
         console.log(i +"is even");
     }
     console.log(i +"is odd");
 }