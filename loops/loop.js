//------------loops--------for(let initialization; stoping condition; increment/dec(updation))
//for , while, do while
//fo(){}
var a = 0;
if (a < 1) {
    console.log("a is less than 1 ");
}
//------for loop----------
for (var count = 1; count < 10; count++) {
    console.log(count, "hello world "); //9 tak chalega
}
//even num print karana hai 0 to 10
for (var i_1 = 0; i_1 <= 10; i_1 += 2) {
    console.log(i_1);
}
//---end
var printTable = function (num) {
    for (var i_2 = 1; i_2 <= 10; i_2++) {
        // console.log(num,"*",i,"=",num*i);
        console.log("".concat(num, " * ").concat(i_2, " = ").concat(num * i_2));
    }
};
printTable(5);
//dynamic stoping condition
var sumOfN = function (num) {
    var sum = 0;
    for (var j = 1; j <= num; j++) {
        //sum += j;
        sum = sum + j;
    }
    console.log(sum);
};
sumOfN(10);
//-----while loop---- ler initialization while(stoping condition {updation})
var i = 0;
while (i < 10) {
    i++;
    console.log(i);
}
//for in loop serif ojects mau use hota hai foreach obj arrays mai use hota hai
