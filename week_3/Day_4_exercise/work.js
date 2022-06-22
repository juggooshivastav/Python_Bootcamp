console.log("conditionals")
//Exercises XP GOLD
// exercise 1

let userlang ="FRN";

switch (userlang){
    case "ENG":
        console.log("HELLO");
      break;
    case "FRN":
        console.log("BONJOUR");
        break;
    case "HBW":
        console.log("SHALOM");
        break;
    default:
    console.log("011100011 01101111 01110010 01110010 01111001");
    break;            
}

let grade_mark= prompt ( "please enter your number")
grade_mark=Number(grade_mark);
console.log(` your grade's mark is ${grade_mark}`);
if(grade_mark>90){
    console.log("you get GRADE A");
}
else if(grade_mark <= 90 &grade_mark>80){
    console.log("you get GRADE B");
}
else if(grade_mark <= 80 & grade_mark >=70){
    console.log("you get GRADE C");
}
else{
    console.log("you get GRADE D");
}