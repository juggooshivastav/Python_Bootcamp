console.log("function")

//function name_of_function(parameters){
    //codes
//}

let a=1;
let b=2;

let sum=a+b;
console.log(sum);

//Normal function
function find_sum(num1, num2){
    let sum=num1 + num2;
    console.log(sum);
}
//calling/Invoking a function
find_sum(a, b);
find_sum(num1= 2,num2=4 );
find_sum(a, num2=5);
let arr=["Joeri", "Ally", "Shivastav","Kadeer","laurent", "Angkush", "Bruno"]
//result JASKLAB

function custom_function(input){
   // console.log(input)
    let output='';
    for (let name of arr ){
       // console.log(name)
        output +=name.charAt(0);
    }
    return output
}
custom_function(arr);
console.log(custom_function(arr));

function Age_function(MyAge){
let mum_age =MyAge*2;
let dad_age = mum_age*1.2;
output(`Mum's age is ${mum_age} and Dad's age is ${dad_age}.`)
}
Age_function(MyAge=24)