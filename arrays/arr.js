//--------Arrays------------ const arrName = []
//collection of data , used multiple values in a single variable.
var student = ["shoaib", "azam", "nawaz"];
console.log("students:", student);
var numbers = [5, 20, 60];
var booleans = [true, false, false];
console.log("student names are ".concat(student, ",and their marks are ").concat(numbers, ", result ").concat(booleans));
//-------limitation in arrays:----
var newArray = ["shoaib", "azam", "hammad"];
var arr2 = [1, 2, 3, 4, 5, 6];
var arr3 = [true, false];
console.log("names", newArray);
//--union operator (pipe sign wala)
var arrayU = ["shoaib", 20, "maria", 80]; // string or num kay elawa kuch bhi nhi asakta
var arrayAll = ["shoaib", 20, true]; // teeno asakte hai 
// ---------array indexing------------
var indArray = ["shoaib", "azam", "Maria", "hammad", "nawaz"];
console.log(indArray[2]); //Maria
console.log(indArray[3]); //hammad
//-----replace shoaib to shabi----------
console.log("original array:", indArray);
indArray[0] = "shabi";
console.log("after replace: shoaib by shabi", indArray);
//--------methoeds:------
//1- push:it will add value in the last index
indArray.push("sher"); //indArray.push("sher","azam"); jitne chaho add krwasakte ho
console.log("after push:sher will be add in the last of index", indArray);
//2---unshift---add value in the first index
indArray.unshift("raju");
console.log("unshift:add raju in the 1st index:", indArray);
//3---pop---  will del last inde
indArray.pop(); //"pop: will del last index nawaz"
//4---shift will del fist index
indArray.shift(); //"shift: will del first index raju"
console.log(indArray);
//5---splice------- (first index then , del count)
var boys = ["shoaib", "azam", "raju", "maria"];
console.log("original array of boys:", boys);
boys.splice(1, 1); //azam will be delete
console.log("boys azam will delete:", boys);
boys.splice(1, 2); //first starting index kay liya then , kitne del karwane hai wo count
console.log("boys:", boys);
boys.splice(1, 0, "nawaz"); //array mai splice del karne kay baat add b karsate hai coma de kay multiple elements add karsakte hai
console.log(boys);
var fruit = ["apple", "mango", "cherry"];
console.log("fruit:", fruit);
var cars = ["honda", "mehran", "altus"];
console.log("cars:", cars);
//-----multi dimensional arrays:---------nested
var multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("multiArray:", multiArray);
//indexing
console.log("multiArray[0]:", multiArray[0]); //[1 2 3] ayega
console.log("multiArray[0][1]:", multiArray[0][1]); //2 ayega
