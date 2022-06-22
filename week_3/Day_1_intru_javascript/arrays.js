console.log("arrays");
​
// Array - List of values
let students = [
    "Angkush",
    "Joeri",
    "Laurent",
    "Shivastav",
    "Kadeer",
    "Ally",
    "Bruno",
    "Yeshna"
]
​
console.log(students);
​
// Get an element from an array
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]);
console.log(students[6]);
​
// Get the number of elements inside an array
console.log(students.length);
​
// Update an element in array
// Joeri to Yuri
students[1] = 'Yuri';
console.log(students);
​
// Add a new element inside an array
// (at the last position)
// students[7] = 'Damien';
students[students.length] = "Damien";
students[students.length] = "Abraham";
console.log(students);
​
students[12] = "Emilie";
console.log(students);
console.log(students[10]);
​
// Nested Arrays
let student_array = [
    ["Angkush", 19],
    ["Joeri", 35],
    ["Laurent", 34, ["Oliver", "Amelia"]],
    ["Shivastav", 24],
    ["Kadeer", 24],
    ["Ally", 24],
    ["Bruno", 50],
]
​
console.log(student_array);
console.log(student_array[0]);
let student_0 = student_array[0];
console.log(student_0[0]);
​
console.log(student_array[0][1])
console.log(student_array[2][2][0])
​
// Array Methods