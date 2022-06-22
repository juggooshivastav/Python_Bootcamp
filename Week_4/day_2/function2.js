console.log("function")
//day_2 exercises
//exercise_1
// Question 4

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ['banana', 'orange', 'apple'];

function myBill(){
    let total = 0;
    // Loop through shopping list
    for (let item of shoppingList){
        // console.log(item);

        // Check if item in stock
        if (stock[item] > 0){
            // Add price to total
            total += prices[item];
            // Update stock
            stock[item]--;
        }
    }
    console.log(stock);
    return total;
}
console.log(myBill())

//exercise 6
 
//let user =prompt( input ("the number of night"));

function hotelcost(){
    let num_nights=null;
    do{
        num_nights=prompt("please enter the number of nights:");
        num_night=Number(num_nights);
    }
    while (isNaN(num_nights) || num_nights <=0)
    return num_nights*140;
}
console.log(hotelcost());