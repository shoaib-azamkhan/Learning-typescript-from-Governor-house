//--Assignment:2 "Object , Array and function"
//---------- Building Your Friend List------------
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data structure.
var people = {
    friends: [],
};
// ii. Create three separate objects, each representing a friend, with properties like firstName,
//lastName, and optionally id.
var friend1 = {
    firstName: "shoaib",
    lastName: "azam",
    Id: 62869,
};
var friend2 = {
    firstName: "sher",
    lastName: "azam",
};
var friend3 = {
    firstName: "nawaz",
    lastName: "azam",
    Id: 1234,
};
// III. Add these friend objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);
// IV. Output the entire people object to the console, displaying your information and your
// friend list.
console.log(people);
//            ----Task 2:Manipulating an Array: Rearranging Words----
// Objective:Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// o Start with an array of elements in a scrambled order, like:
// Step 1: Scrambled Array
//const scrambledArray: (string | boolean | number)[] = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// Step 2: Convert non-strings to strings using array methods
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
scrambledArray[2] = scrambledArray[2].toString(); // true to "true"
scrambledArray[3] = scrambledArray[3].toString(); // 123 to "123"
// create temporary arrays).
var tempArray = [];
// Step 3: Rearrange elements in the desired order
// o Rearrange characters or elements in the desired order (modify original array or
tempArray.push(scrambledArray[7]); // "I"
tempArray.push(scrambledArray[4]); // "am"
tempArray.push(scrambledArray[5]); // "a"
tempArray.push(scrambledArray[0]); // "student"
tempArray.push(scrambledArray[1]); // "of"
tempArray.push(scrambledArray[6]); // "GIAIC"
// Step 4: Combine elements back into a single string
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
var result = tempArray.join(' ');
// • Output the Result:
console.log("after Rearranging:", result); // "I am a student of GIAIC"
//           Task 3:----- Company Product Catalog------
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
var inventory = [];
var product1 = {
    name: "Bata Shoes",
    model: 2024,
    cost: 2500,
    quantity: 20,
};
var product2 = {
    name: "HP Laptop",
    model: 2020,
    cost: 25000,
    quantity: 10,
};
var product3 = {
    name: "Bike",
    model: 2024,
    cost: 90000,
    quantity: 20,
};
// 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1, product2, product3);
console.log(inventory);
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
//inventory[product3.quantity];
console.log(inventory[product3.quantity]);
;
var student_1 = {
    name: "Shoaib",
    senior: true,
    assignments: true,
};
var student_2 = {
    name: "Azam",
    senior: false,
    assignments: false,
};
var student_3 = {
    name: "Zahir",
    senior: false,
    assignments: false,
};
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?
