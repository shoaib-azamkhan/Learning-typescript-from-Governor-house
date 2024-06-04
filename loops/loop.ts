//------------loops--------(for loop , while loop, do while loop)

 let a = 0;
 if (a < 1){
    console.log("a is less than 1 ");
 }

 //(1)-for loop: for(let initialization; stoping condition; increment/dec(updation)){}
             // => for(){}
 for(let count=1;count<10;count ++ ){
    console.log(count,"hello world "); //9 tak chalega
 }

  //even num print karana hai 0 to 10
  for(let i = 0; i <= 10; i+=2){
    console.log(i );
 }
 //------print table---
 const printTable = (num:number) =>{
    for(let i = 1; i <= 10; i ++){
       // console.log(num,"*",i,"=",num*i);
        console.log(`${num} * ${i} = ${num * i}`);
 }}
 printTable(5);

 //dynamic stoping condition
 const sumOfN =(num:number)=>{
    let sum =0;
    for(let j=1; j<=num; j++){
        //sum += j;
        sum = sum +j;
    }
   console.log(sum)
 }
 sumOfN(5);

 //-----while loop: let initialization while(stoping condition {updation})
 let i = 0
 while ( i< 10){
    i++;
    console.log(i);
 }

 //for in loop serif ojects mai use hota hai foreach obj arrays mai use hota hai

 //-----for in loop=== let objname={values:keys}----
 let obj ={
    name:"shoaib azam",
    batch:"thursday class"
 };
 for (let x in obj){              //in for objs
    console.log(x,"x");
    //console.log(x,student[x]);
 }

 // for static
 //for dynamic