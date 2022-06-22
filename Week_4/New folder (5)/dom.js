console.log("INTRO OF DOM");
//using class
let reds =document.getElementsByClassName('red');
for (let red of reds){
    console.log(red);
}
 
//Query Selector
let h1=document.querySelector('h1');
console.log('h1');

//exercise 1
let DIV=document.getElementsByTagName('div4');
console.log(DIV[0]);
 
let list=document.getElementsByTagName('ul');
console.log(list[0]);

let list2=document.getElementsByTagName('li');
console.log(list2[1]);