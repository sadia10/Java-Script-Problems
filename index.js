

//P1.Create a program that stores your favorite book's title, the year it was published,
//and whether you've read it or not. Print out a sentence using these variables, e.g.,
//"My favorite book is '1984', published in 1949, and I have read it: true."

// Define the variables for the book's details
const favoriteBookTitle = "1984";
const publicationYear = 1949;
const haveReadIt = true;

// Print out the sentence using these variables
console.log(`My favorite book is '${favoriteBookTitle}', published in ${publicationYear}, and I have read it: ${haveReadIt}.`);



//P2.Problem: Write a program that creates an array of your favorite movies. Add two more movies to the list using push,
//remove the first movie using shift, and then use map to print each movie title in uppercase.

let favoriteMovies = ["Godzilla vs Kong", "Ice Age", "Fast and Furious"];

// Two movies added
favoriteMovies.push("Twilight", "The fantastic four");

// First movie removed using shift
favoriteMovies.shift();

// Map will make the title uppercase
favoriteMovies.map(function(movie) {
    console.log(movie.toUpperCase());
});



//P3.Write a program that asks the user for their age and tells them whether they are a child
//(under 12), a teenager (13-19), an adult (20-64), or a senior (65 and older) using if-else if-else.

let age = prompt("Enter your age:");

if (age < 12) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else if (age >= 20 && age <= 64) {
    console.log("You are an adult.");
} else if (age >= 65) {
    console.log("You are a senior.");
} else {
    console.log("Invalid age entered.");
}


//P4.Problem: Write a program that prints out the multiplication table for a given number using a for loop. 
//Use a while loop to sum all numbers from 1 to 100. Finally, use a do...while loop to count down from 10 to 1.

//Multiplication Table:)
let number = 5; 
console.log("Multiplication Table for " + number + ":");
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

//Sum of 1 to 100 using a while loop
let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log("Sum from 1 to 100 is: " + sum);

// Count down from 10 to 1 using a do while loop
let count = 10;
console.log("Counting down:");
do {
    console.log(count);
    count--;
} while (count > 0);


//P5.Write a program that calculates the area and perimeter of a rectangle. Take the length and width as variables,
//and use arithmetic operators to find the area (length * width) and perimeter (2 * (length + width)).

let length = 4;
let width = 3;

let area = length * width;
let perimeter = 2 * (length + width);

console.log("Area of the rectangle: " + area);
console.log("Perimeter of the rectangle: " + perimeter);


//P6.Write a program that takes a sentence as input and returns the number of vowels in the sentence. Use string 
//methods to convert the string to lowercase and then count the vowels.

const sentence = prompt("Enter a Sentence:");

const lowerCaseSentence = sentence.toLowerCase();

let vowelCount = 0;

const vowels = "aeiou";

for (let char of lowerCaseSentence) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}

console.log(`Number of vowels: ${vowelCount}`);


//P7. Write a program that takes a number as input and checks if the number is positive, negative, or zero using 
//if-else statements. Additionally, use a switch statement to print the grade ("A", "B", "C", etc.) based on a numerical 
//score input (90-100: "A", 80-89: "B", etc.).

const prompt = require("prompt-sync")();

const score = Number(prompt("Enter your score (0-100):"));

let grade = '';

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score >= 0 && score < 60):
        grade = 'F';
        break;
    default:
        console.log("Invalid score.");
        break;
}
