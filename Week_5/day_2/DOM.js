console.log("EXERCISES")

//exercises xp
//exercise 1

//let body=document.getElementsByTagName('article');
//console.log(body);

console.log(document.querySelectorAll('h1')[0]);

let parentElem = document.querySelectorAll('p');
let childElem = document.querySelectorAll('p')[3];
//console.log(childElem)
parentElem.removeChild(childElem);


let H = document.getElementsByTagName('h2')[0];
console.log(H);
H.addEventListener("click", Respondclick);

function Respondclick(){
    H.style.backgroundcolor='red';
    
}