//------------objects----------last mai semicolon let objName={};
//aik file k under aik hi cheez kuch bhi hosakti hai jis ki properties ho unko store karte hai,ya ak cupboard smjhlo waha rakhte ha
//like yahan humne students ka object banaliya hai.
let student1 = {
    name: "shoaib azam",
    age: 21,
    RollNum: 200062869,
    class: "DLD",
    gmail: "shoaibazam875@gmail.com",
};
console.log(student1);
//puray obj ka agar out chahiyein aik sth tou backticks use nhi karange.
console.log(student1.age);
//aik individual value chahiyein tou back ticks use karsakte hai.
console.log(` student email address is ${student1.gmail}`);
//back ticks also known as templete litterals
//object.keys.length fo obj length
//console.table(student); table ki form mai ayega output
let student2 = {
    name: "Maria",
    age: 16,
    RollNum: 200062869,
    class: "DLD",
    gmail: "Maria875@gmail.com",
};
//same key yani multiple variables bana sakte hai obj kay under
//console.log("our first student is" +student1 +  "Maria"+ student2); ya b nhi karsakte 
console.log(student1, student2);
//============Car object==========//
let car = {
    name: "honda civic",
    model: "cgx-135",
    year: "2021",
    color: "red",
    engine: "turbo",
};
console.table(car);
// console.log("car object ",car);
//---------objects kay under bhi types define karsakte hai.limitation set karsakte hai--------------
let employee = {
    name: "shahid",
    age: 24,
    email: "shahid@gmail.com",
    result: true,
    //class:"typescript",
};
console.log("employee object ", employee);
let employee1 = {
    name: "shoaib",
    age: 34,
    isAdmin: true
};
let employee2 = {
    name: "sara",
    age: 24,
    isAdmin: false
};
let employee3 = {
    name: "ali",
    age: 67,
    isAdmin: true
};
console.log(employee1, employee2, employee3);
let myCar = {
    name: "honda Civic",
    model: "civic 2024",
    year: 2024,
    powerStaring: true,
    //owner:"hamza",
};
let yourCar = {
    name: "Altus",
    model: " 2020",
    year: 2024,
    powerStaring: true,
    // owner:"raju",
};
// keys ko hum change bhi karsakte hai
yourCar.name = "Mehran", //change value  of key name by mehran
    // delete yourCar.year        // delete the property from object
    yourCar.model = "2022";
console.log("your Car", yourCar);
console.log("my Car", myCar);
const student11 = {
    name: "John",
    education: "BSCE",
    gender: "male",
    address: {
        street: "G9 4",
        city: "Islamabad",
        postalCode: 715000,
    }
};
//---------
// product const title:polo, desc? price: 100, nested mai  additionalInfo:{ }
const product = {
    title: "Shoes",
    desc: "World best & branded shoes",
    price: 2500,
    additionalInfo: {
        color: "Black",
        size: "xl",
        quantity: 500,
    }
};
const stdnt = {
    bio: {
        name: "shoaib azam",
        age: 22,
        isMale: true,
    },
    department: {
        depName: "computer science",
        faculty: "bcom",
    }
};
console.log(stdnt.department.depName);
// function greet(){
//     console.log(" ");
// }
const boy = {
    name: "azam",
    dob: 2002,
    gender: "male",
    callName: function () {
        console.log("hello shoaib azam");
    }
};
// greet()
boy.callName();
export {};
