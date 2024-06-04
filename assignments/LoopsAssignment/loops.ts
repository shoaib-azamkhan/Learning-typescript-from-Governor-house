//-----------------------Loops Assignments 3------------------------------------------------
          
             // 1. Creating a Lesson Plan(Using for loop )
// Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate
// whether each lesson is running this year.
        // Steps to Follow:
// i. Create a blank array: Start by setting up an empty array named myWork that will hold objects
let myWork=[];

// ii. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
// o Each lesson should have a name property, which is a string like "Lesson 1","Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
// status: false, and so on.
type Lesson={
    name:string,
    status:string
};
for (let i=1;i<=10;i++){
    let lesson:Lesson={
        name:"Lesson "+ i,
        status:i%2==0?"Running":"Not Running"}; //i%2==0?true:false
// iii. Add the lesson to the array: Push each lesson object into the myWork array
        myWork.push(lesson);
    }
// iv. Print the result: Finally, log the myWork array to the console to see the list of lessons.
       console.log(myWork);

   //    2.----------------- Guessing Game (Using while loop------------------------------
//    Objective: Create a simple number guessing game where the user tries to guess a randomly
//    generated number between 1 and a specified maximum value using a predefined set of guesses.
//    Steps to Follow:
//    i. Set a maximum value: Create a variable to store the maximum value for the number
//    guessing game.
    let maxValue:number=100;
//   ii. Generate a random number: Use Math.random() and Math.floor() to generate a random number 
//       between 1 and the maximum value. Log this value to the console for development purposes.
         let randomNumber:number=Math.floor(Math.random()*maxValue)+1;
         console.log("Random Number (for develepment purpose): ",randomNumber);
//   iii. Track the guess status: Create a variable to track whether the user's guess is correct. Set
//    it to false initially.
         let isCorrect:boolean=false;
//   iv. Simulate user guesses: Use an array to store a series of predefined guesses.
         let preDef_guesses:number[]=[15, 23, 35, 42, 67, 89, 100, 90, 55, 30, 50];
//   v. Iterate over guesses:Use a while loop to iterate over the predefined guesses until the correct guess is made.
         let j:number=0;
         while(j < preDef_guesses.length && !isCorrect ){
            let currentGuess: number = preDef_guesses[j];
            console.log(`Guess #${j + 1}: ${currentGuess}`);
//   vi. Check the user's guess: Inside the loop, check if the current guess matches the random
//    number. Provide feedback if the guess is too high or too low.
    if (currentGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number.");
        isCorrect = true;
    } else if (currentGuess < randomNumber) {
        console.log("Your guess is too low.");
    } else {
        console.log("Your guess is too high.");
    }
       j++
         }

         if (!isCorrect) {
            console.log("Sorry, you've run out of guesses. Better luck next time!");
        }

//         3.-------------- Counter Incrementer (Using do while loop )----------------
// Objective: Create a program that increments a counter by a specified step value using a
// do...while loop and prints the counter value to the console until it reaches or exceeds 100.
// Steps to Follow:
// i. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// ii. Create a variable, step, to increase your counter by: Define a variable step to hold
// the value by which the counter will be incremented.
// iii. Add a do...while loop: In the loop, print the counter to the console and increment it by
// the step amount each iteration.
// iv. Continue to loop until the counter is equal to or more than 100: The loop should run
// as long as the counter is less than 100.
// Step i: Set the starting counter to 0
let counter: number = 0;

// Step ii: Create a variable, step, to increase your counter by
const step: number = 5; // we can change this value to any desired step amount

// Step iii: Add a do...while loop
do {
    // Print the counter value to the console
    console.log(counter);

    // Increment the counter by the step amount
    counter += step;
} while (counter < 100); // Step 4: Continue to loop until the counter is equal to or more than 100

// To handle the case where the counter might exactly reach 100
if (counter === 100) {
    console.log(counter);
}

//       4.--------------Exploring Objects with for...in Loop-----------------------
// Objective: Practice working with objects in TypeScript and iterating over their properties using a for...in loop.
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3,
// each with corresponding string values.
type Items={
    item1:string;
    item2:string;
    item3:string;
};
const myObject:Items={
    item1:"milk",
    item2:"sweet",
    item3:"juice"
}
// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the console.
for (let property in myObject){
    //console.log(property,"x");
    console.log(`${property}: ${myObject[property]}`);
    // console.log(myObject.item1,myObject.item2,myObject.item3);
}

//          5.------------------Exploring Arrays with Loops(Using loop )--------------------------
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
// to iterate through array elements.
// 1. Create an empty array: Define an empty array called myArray.
let myArray:number[] = [];
// 2.Run a loop 10 times, adding a new incrementing value to the array: Use a for loop to iterate 10 times.
// o In each iteration, add a new incrementing value (starting from 1) to the myArray.
for(let i=1;i<=10;i++){
    myArray.push(i );
}
// 3. Log the array into the console:After populating the array, log the myArray into the console.
console.log(myArray);
// 4. Use the for loop to iterate through the array:Use a for loop to iterate through the array elements.
// o Adjust the number of iterations based on the number of values in the array.
// o Output each array element along with its index into the console.
// Use the for...of loop to output the value into the console from the array:
// o Use a for...of loop to iterate through the array elements.
// o Output each array element directly into the console.
for (let i = 0; i < myArray.length; i++) {
    console.log(`Element at index ${i}: ${myArray[i]}`);
  }
  
  // 5. Use the for...of loop to iterate through the array
  for (const element of myArray) {
    console.log(element);
  }

