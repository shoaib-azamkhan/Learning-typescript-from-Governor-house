//--------Arrays------------ const arrName = []
//collection of data , used multiple values in a single variable.
var student = ["shoaib", "azam", "nawaz"];
console.log("students:", student);
var numbers = [5, 20, 60];
var booleans = [true, false, false];
console.log("student names are ".concat(student, ",and their marks are ").concat(numbers, ", result ").concat(booleans));
//-----limitation in arrays:----
var newArray = ["shoaib", "azam", "hammad"];
var arr2 = [1, 2, 3, 4, 5, 6];
var arr3 = [true, false];
console.log("names", newArray);
//union operator (pipe sign wala)
var arrayU = ["shoaib", 20, "maria", 80]; // string or num kay elawa kuch bhi nhi asakta
var arrayAll = ["shoaib", 20, true]; // teeno asakte hai 
// ---------array indexing------------
var indArray = ["shoaib", "azam", "Maria", "hammad", "nawaz"];
console.log(indArray[2]);
console.log(indArray[3]);
//-----replace shoaib to shabi----------
console.log("original array:", indArray);
indArray[0] = "shabi";
console.log("after replace: shoaib by shabi", indArray);
//--------methoeds:------
//1- push --- add value in the last index
indArray.push("sher"); //indArray.push("sher","azam"); jitne chaho add krwasakte ho
console.log("after push:sher will be add in the last of index", indArray);
//---unshift---add value in the first index
indArray.unshift("raju");
console.log("unshift:add raju in the 1st index:", indArray);
//---pop---  will del last inde
indArray.pop(); //"pop: will del last index nawaz"
//---shift will del fist index
indArray.shift(); //"shift: will del first index raju"
console.log(indArray);
//
