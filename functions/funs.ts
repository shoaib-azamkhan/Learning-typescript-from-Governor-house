        
//--------------------------functions--------------------//
function addition(a :number,b:number){
    return(a+b);
  }
  let sum= addition(5,5);
  console.log(sum);
  //--------------------------------
  function subtraction(user:number){
    console.log(8-3-user)
  }
  
  subtraction(2);


  //--------------------------- optional parameters:--------------------------------------------
  function greed(name:string,age?:number,classes?:string)//optional params hai ?
  {
    console.log("hello" + name);
  } 
greed(" shoaib");// yahan arguments dedo gay tou thek nhi tou koie masalah nhi wala scene hai


//------------------------rest parameters: obsolete optional param---------------------------------------
function greed1(name:string,age:number,...rest:any) //rest parameter ki type any hoti hai
  {
    console.log("hello",name, rest);
  }
greed1("shoaib",22,"azam, raju, sameer, muneeb,sher");
//hello shoaib [ 'azam, raju, sameer, muneeb,sher' ]

//-------------------------default parameters:---------------------------------------------
function movie(name:string, releaseDate:number=2024) //bydefault mai 2024 ayega agar kuch or argument mai dete ho tou wo print hoga
{
  console.log(`this movie name is${name} and will release date is ${releaseDate}`)
}
movie(" interestaller",2025);
//output: this movie name is interestaller and will release date is 2025


//----------arrow functions(fat arrow fun, anonymous fun ): let ya const ka use karte hai yaha----
const sayHello= (name:string) => console.log(`hello, ${name}`);
sayHello("shoaibadam");
//hello,soaibadam

//agar aik line ka code hai tou curly braces bhi nhi de sakte hain.
// arrow function mai bhi uper ki tarah same bydefault yani optional param de sakte hai

//return statement:hamisha aik var mai rakhoge jab bhi call karane jawoge tou
//block of code ko baher use karne kay liya use karte hai
const calculator =(num5:number, num6:number) =>
{
  let result= num5 + num6;
  return result
  //return(num5+num6);
}
let addition2= calculator(1,2);
console.log(addition2-1 );
//2
//---------------------------------------------
const sayHello1=(userName:string) =>
{
  let lastName;
  return lastName
}
let responce = sayHello1("Humza");
console.log(responce);

//self work 
// const calculation(numOne:number, numTwo:number)=>
// {
//  let sub;
//  return sub
// }
// let result1= calculation();
// console.log(result1);


