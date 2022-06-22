console.log("paly the game")

function playTheGame(){
    console.log("Button Clicked");
    let answer=confirm("Would you like to play the game?");
     
    if (answer === false){
        alert( message="No problem, Goodbye!");
    }
    else if (answer){
        let num = prompt("please enter a number between 0 and 10");
        num = Number(num);
    
       if (isNaN(num)){
        alert=("Sorry Not a number ,GOODBYE!");
       }
      else if (num < 0 || num > 10){
        alert=("Sorry it isnot a good number,GOODYE!");

       }
      else{
        let computerNumber = randNum(max=10);
        console.log("computer Number:" + computerNumber);
       }


   }
function randNumBetween(max){
    return math.round(x=math.random()*max)
}
}
function compareNumbers(userNumber, computerNumbers){
    let win=false;

    for (let i=0;i<3;i++){

        if (userNumber===computerNumbers){
        alert(message="winner")
        win=true;
        break; }

        
    }
}