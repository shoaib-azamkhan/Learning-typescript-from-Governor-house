//--------------------------functions--------------------//
function addition(a, b) {
    return (a + b);
}
var sum = addition(5, 5);
console.log(sum);
//--------------------------------
function subtraction(user) {
    console.log(8 - 3 - user);
}
subtraction(2);
//--------------------------- optional parameters:--------------------------------------------
function greed(name, age, classes) {
    console.log("hello" + name);
}
greed(" shoaib"); // yahan arguments dedo gay tou thek nhi tou koie masalah nhi wala scene hai
//------------------------rest parameters: obsolete optional param---------------------------------------
function greed1(name, age) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log("hello", name, rest);
}
greed1("shoaib", 22, "azam, raju, sameer, muneeb,sher");
//-------------------------default parameters:---------------------------------------------
function movie(name, releaseDate) {
    if (releaseDate === void 0) { releaseDate = 2024; }
    console.log("this movie name is".concat(name, " and will release date is ").concat(releaseDate));
}
movie(" interestaller", 2025);
//output: this movie name is interestaller and will release date is 2025
//----------arrow functions(fat arrow fun, anonymous fun ): let ya const ka use karte hai yaha----
var sayHello = function (name) { return console.log("hello, ".concat(name)); };
sayHello("shoaibadam");
//agar aik line ka code hai tou curly braces bhi nhi de sakte hain.
// arrow function mai bhi uper ki tarah same bydefault yani optional param de sakte hai
//return statement:hamisha aik var mai rakhoge jab bhi call karane jawoge tou
//block of code ko baher use karne kay liya use karte hai
var calculator = function (num5, num6) {
    var result = num5 + num6;
    return result;
};
var addition2 = calculator(1, 2);
console.log(addition2 - 1);
//---------------------------------------------
var sayHello1 = function (userName) {
    var lastName;
    return lastName;
};
var responce = sayHello1("Humza");
console.log(responce);
//self work 
// const calculation(numOne:number, numTwo:number)=>
// {
//  let sub;
//  return sub
// }
// let result1= calculation();
// console.log(result1);
