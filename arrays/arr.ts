//--------Arrays------------ const arrName = []
//collection of data , used multiple values in a single variable.
const student = ["shoaib","azam","nawaz"];
console.log("students:", student);
const numbers = [5,20,60];
const booleans = [true,false,false];
console.log(`student names are ${student},and their marks are ${numbers}, result ${booleans}`)

//-------limitation in arrays:----
let newArray:string[] = ["shoaib","azam","hammad"];
let arr2:number[] = [1,2,3,4,5,6];
let arr3:boolean[] = [true,false];
console.log("names", newArray);
//--union operator (pipe sign wala)
let arrayU:(string|number)[] = ["shoaib",20,"maria",80]; // string or num kay elawa kuch bhi nhi asakta
let arrayAll:(string|number|boolean)[] = ["shoaib",20,true]; // teeno asakte hai 
// ---------array indexing------------
let indArray:string[] = ["shoaib","azam","Maria","hammad","nawaz"];
console.log(indArray[2]);//Maria
console.log(indArray[3]);//hammad

//-----replace shoaib to shabi----------
console.log("original array:",indArray);
indArray[0]="shabi";
console.log("after replace: shoaib by shabi",indArray);
//--------methoeds:------
//1- push:it will add value in the last index
indArray.push("sher");                  //indArray.push("sher","azam"); jitne chaho add krwasakte ho
console.log("after push:sher will be add in the last of index",indArray);

//---unshift---add value in the first index
indArray.unshift("raju");
console.log("unshift:add raju in the 1st index:",indArray);

//---pop---  will del last inde
indArray.pop();//"pop: will del last index nawaz"

//---shift will del fist index
indArray.shift();//"shift: will del first index raju"
console.log(indArray);

//




