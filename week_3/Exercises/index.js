console.log("job done")
//exercise_XP
//exercise_1 list of people
 let people=["Greg", "Mary", "Devon", "James"];
 console.log(people)
  
 let firstelement = people.shift();
 console.log(people);
 //output:people{"Mary","Devon","James"}

 console.log(firstelement);
 //output:greg

 people[2]="Jason"
 console.log(people);

 people[3]="Shivastav"
 console.log(people);

 console.log(people.indexOf('Mary'));

 console.log(people.slice(1,3));

 console.log(people.indexOf('Foo'));
 //return -1 because Foo does not found in the list

console.log(people)

for (let i=0; i<people.length; i++){
    console.log(people[i]);
}
 
for (let i=0;i<people.length; i++){
    console.log(people[i]);
    break 
}

//exercise_2 your Favorite Colors

let colors=['lightbrown', 'white', 'black', 'brownish', 'purple'];
console.log(colors)