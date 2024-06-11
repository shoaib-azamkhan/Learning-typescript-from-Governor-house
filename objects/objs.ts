//------------objects----------last mai semicolon let objName={};
//aik file k under aik hi cheez kuch bhi hosakti hai jis ki properties ho unko store karte hai,ya ak cupboard smjhlo waha rakhte ha

import { log } from "console";
import { pid, title } from "process";

//like yahan humne students ka object banaliya hai.
let student1={
    name:"shoaib azam",    //properties (key and values)
    age: 21,
    RollNum:200062869,
    class:"DLD",
    gmail:"shoaibazam875@gmail.com",

}
console.log(student1);
//puray obj ka agar out chahiyein aik sth tou backticks use nhi karange.
console.log(student1.age);
//aik individual value chahiyein tou back ticks use karsakte hai.
console.log(` student email address is ${student1.gmail}`);
//back ticks also known as templete litterals
//object.keys.length fo obj length
//console.table(student); table ki form mai ayega output
let student2={
    name:"Maria",    //properties (key and values)
    age: 16,
    RollNum:200062869,
    class:"DLD",
    gmail:"Maria875@gmail.com",

}
//same key yani multiple variables bana sakte hai obj kay under
//console.log("our first student is" +student1 +  "Maria"+ student2); ya b nhi karsakte 
console.log(student1,student2);
//============Car object==========//
let car ={
    name: "honda civic",
    model : "cgx-135",
    year :"2021",
    color:  "red",
    engine: "turbo",

}
console.table(car);
// console.log("car object ",car);
//---------objects kay under bhi types define karsakte hai.limitation set karsakte hai--------------
let employee: {name:string, age:number,email:string,result:boolean}={
    name: "shahid",
    age: 24,
    email: "shahid@gmail.com",
    result:true,
    //class:"typescript",  class uper type mai add hi nhi kiya hai tou is mai error show kardega
}
console.log("employee object ",employee);
//------apni alag say type bana sakte hai type ka use karkay... bydefault mai string,num,bool--------
//alag say kiun banate hai?kiun ki ya uper ak object hai humne is kay under hi banaliya, jab ak se zadah objs honge tab kya karoge sub
// sub kay liya alag alag types define karoge kya. tou ak hi type banakar uskay name ko kise b obj mai rakhange
   //----type ka key word camale case hota hai yani fist latter capital----
   //type ki properties kay akher mai simicolon; dete hai jabki obj mai , comma
type Employee ={
    name:string;
    age:number;
    isAdmin:boolean;
};
let employee1:Employee={
    name:"shoaib",
    age:34,
    isAdmin:true
};
let employee2:Employee={
   name:"sara",
   age:24,
   isAdmin:false
};
let employee3:Employee= {
    name: "ali",
    age:67,
    isAdmin: true
};
console.log(employee1,employee2,employee3);
// console.log("employee1 ",employee1) ;
// console.log("employee2 ",employee2);
// console.log("employee3 ",employee3);

     //--------------object of car by using self types------------
     //objects ki properties ko bhi hum optional karsakte hai
type Cars={
    name:string;
    model:string;
    year:number;
    powerStaring:boolean;
    owner?:string;       //owner field is optional
}
let myCar:Cars={
        name:"honda Civic",
        model:"civic 2024",
        year:2024,
        powerStaring:true,
        //owner:"hamza",

};
let yourCar:Cars={
    name:"Altus",
    model:" 2020",
    year:2024,
    powerStaring:true,
    // owner:"raju",

};
// keys ko hum change bhi karsakte hai
yourCar.name="Mehran",        //change value  of key name by mehran
// delete yourCar.year        // delete the property from object
yourCar.model="2022"

console.log("your Car",yourCar);
console.log("my Car",myCar);
//---------------------
type ModelNumber= number|  string | boolean;     //union type
// type Cars={
//     name:string;
//     model:ModelNumber;             //here we are saying that model can be either a
//     powerStraing:boolean;          //number or a string or a
//}
// let ModelNumber:ModelNumber="2019";   //assigning string
//     {name:"cultus",
//     model:2019,                      //giving number to model
//     powerStraing:false,               //giving false to powerStarting

// };

//09-05-24
// type Product={
//   title:string;
//   desc:string;
//   price:number;
//  isAvailable:boolean;

// };
// const product:Product={
//     title:"watch",
//     description:"",
//     price:300,
//     isAvailable:true,
// };
//----------------nested objects:----------
type User ={
    name:string;
    age?:number;           //optional parameter

};
const student11={
    name:"John",
    education:"BSCE",
    gender:"male",
    address:{
        street:"G9 4",
        city:"Islamabad",
        postalCode:715000,
    }


}

//---------
// product const title:polo, desc? price: 100, nested mai  additionalInfo:{ }
const product={
    title:"Shoes",
    desc:"World best & branded shoes",
    price:2500,
    additionalInfo:{
        color: "Black",
        size: "xl",
        quantity:500,
    }
};
//---nested types and nested objects--------
type stdnts={
    bio:{
        name:string
        age: number
        isMale:boolean
    },
    department:{
        depName:string,
        faculty:"bcom"|"BSCS"|"BA", //--typealias
    }

};
const stdnt:stdnts={
    bio:{
        name:"shoaib azam",
        age: 22,
        isMale:true,

    },
    department:{
        depName:"computer science",
        faculty:"bcom",
    }
};
console.log(stdnt.department.depName);
//object.keys() //.values(stdnt.department) // object.entries(stdnt.bio)

// function inside an object:
//obj kay under jab bhi fun banta hai tou wo property
//objects kay under agar functions atein hai tou wo methods banjate hai or fun say pehle name dete hai or: colon then fun
type Boy={

};
// function greet(){
//     console.log(" ");
// }
const boy = {
    name:"azam",
    dob:2002,
    gender:"male",
    callName:function()   //fun ka name nhi hai matlb ya annonymous fun hai
    {
        console.log("hello shoaib azam");
    }
};
// greet()
boy.callName();

//aik object kay under 2 types bhi rakhsakte hai  & urdu wala or de kay
//union (pipe) | or operator 
//aik mai dono dena must hai aik mai marzi hai
type Intersection1={
    name:string,
    age:number,
    dob:number;
}
type Intersection2={
    name:string;
    ismale:boolean;
}
let intersection:Intersection1 & Intersection2{
    name:"shoaib azam",
    age:22,
    dob:2002,
    male:true,
}