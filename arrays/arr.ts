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

//2---unshift---add value in the first index
indArray.unshift("raju");
console.log("unshift:add raju in the 1st index:",indArray);

//3---pop---  will del last inde
indArray.pop();//"pop: will del last index nawaz"

//4---shift will del fist index
indArray.shift();//"shift: will del first index raju"
console.log(indArray);

//5---splice------- (first index then , del count)
const boys =["shoaib","azam","raju","maria"]
console.log("original array of boys:",boys);
boys.splice(1,1);      //azam will be delete
console.log("boys azam will delete:",boys);

boys.splice(1,2);  //first starting index kay liya then , kitne del karwane hai wo count
console.log("boys:",boys);

boys.splice(1,0,"nawaz"); //array mai splice del karne kay baat add b karsate hai coma de kay multiple elements add karsakte hai
console.log(boys);

//6---slice------- 

//-------------tuples-------------limition 
type Fruits = [string,string,string]; //3 string liya hai matlb 3 say nah zadah na kam ayange elements
const fruit:Fruits =["apple","mango","cherry"]
console.log("fruit:",fruit);

type Cars= [string,string,string];//3 ki limit hai ap nichy 3 say zadah or 1 kam bhi nhi de sakte
const cars:Cars=["honda","mehran","altus"];
console.log("cars:",cars);

//-----multi dimensional arrays:---------nested
const multiArray = [[1,2,3],[4,5,6],[7,8,9]];
console.log("multiArray:",multiArray);
//indexing
console.log("multiArray[0]:",multiArray[0]); //[1 2 3] ayega
console.log("multiArray[0][1]:",multiArray[0][1]); //2 ayega
let multi_array=[1,2,3,4,[4,5,6]];
console.log("multi_array[4][1]:",[4][1])// 5 ayega



