let log = console.log;

// // log('Method and this keyword');

// //#################################
// //########## 1. Intro Method
// //#################################

// // Object === Collection of Property or/and Method

// // each record => called Property
// // each Property => <key>.<value>

// // some record => <key>:<FN>
// // called Method == ความสามารถของ Object


// // const programmer = {
// //     name: 'Pavit',
// //     age: 30,
// //     dev: devWebsite,
// //     meet: meeting,
// //     sleep: sleep
// // };


// // function devWebsite () {
// //     console.log('I"m working');
// // }

// // function meeting() {
// //     console.log("I'm meeting");
// // }


// // log(programmer.name)
// // log(programmer.age)

// // function sleep() {
// //     console.log("I'm sleeping")
// // }

// // // programmer.dev // devWebsite
// // // Syntax : <obj>.<method>()
// // programmer.dev();
// // programmer.meet();
// // programmer.sleep();
// // เพิ่ม method ให้ Programmer

// let name = 'John';
// let age = 30;
// const programmer = {

//     // property shorthand
//     name,
//     age,
//     dev: function () {
//         console.log("I'm working");
//     },
//     meet: function () {
//         console.log("I'm meeting");
//     },

//     // method shorthand
//     sleep: function () {
//         console.log("I'm sleeping");
//     }
//     // sleep : () => console.log("I'm sleeping")
// };

// programmer.dev()
// programmer.meet()


// // Mini-lab
// // สร้าง Object ของตัวเอง
// // ระบุคุณสมบัติของตัวเองสัก 2-3 ข้อ
// // ระบุความสามารถตัวเองสัก 4 อย่าง (cover ทุก Syntax)
// // key : namedFunction
// // key : anonymous FN
// // key : arrowFN
// // key : shorthand

// const me = {
//     name: "EikQ",
//     hair: "Black",
//     eye: "Brown",
//     sport: function playSport(type) {
//         console.log(`I m playing ${type}`);
//     },
//     cook: function () {
//         console.log("I'm cooking");
//     },
//     graphic: (item) => console.log(`I'm designing ${item}`),
//     hardWork() {
//         console.log("I'm working in Focus Mode");
//     }
// }

// me.sport('tabletennis');
// me.cook();
// me.graphic("poster");
// me.hardWork();

// // ##############################################
// // ####### 3. Intro OOP : Object Oriented Program
// // ##############################################
// const car = {
//     brand: "Tesla",
//     model: "x",
//     speed: 80,
//     drive: () => console.log('Driving'),
//     'auto pilot': () => console.log('Self Driving'),
// };

// console.log(car.brand, car.model);


// // Caller.Method
// car.drive();
// car['auto pilot'];

// const calculator = {
//     sum: (x,y)  => x + y,
//     minus: (x,y) => x-y,
// };

// let r1 = calculator.sum(5,7);
// let r2 = calculator.minus(7,3);
// log(r1 , r2);

// log(car.speed)
// car.speed = calculator.sum(car.speed, 20);
// log(car.speed);


// ############################3
// ############# 4. This keyword
// ############################3

// JS Keyword : if,else,for, while, do, switch, this

// const user = {
//     name: 'codecamp',
//     age: 15,
//     sayHi: function () {
//         console.log(`Hello ${this.name}`);
//     },
//     growOld : function () {
//         console.log(this); // this == user , this.age == user.age
//         this.age++;
//     },
// };

// // Question :  ทำอย่างไร method จะสามารถเข้าถึง Property ขอวตัวเองได้
// user.sayHi();
// user.name = 'software park';


// log(user.age);
// user.growOld();
// log(user.age);


// Q : ค่าของ this ถูก solve ตั้งแต่ตอนที่เขียน function หรือเปล่า ?
// A : ไม่
// // This == Dynamics Caller/Dynamics Context
// function dev(feature) {
//     console.log(`This ${feature} developed by ${this.name}`);
// }

// const programmer1 = {
//     name: 'John',
//     develop: dev,
// };

// const programmer2 = {
//     name: 'Jane',
//     develop: dev,
// };

// // A : this ถูก solve ตอนเรียกใช้ method
// // Caller.method => this == Caller == Object before the dot
// // Checkpoint-1 : this == object ที่เรียกใช้ method
// console.log(window);
// console.log(this);

// programmer1.develop('Login');
// programmer2.develop('Cart');
// programmer2.develop('Register');


// function myMessage() {

// }

// 1.เวลา run FN จะสร้าง Context สำหรับ Execute
// 2.ก่อนรัน JS , มี Context ตัวหนึ่งที่มาก่อนกาล , Global , Window
//  -  this = Current Execution context === Window Object

// เพราะฉะนั้นตอนที่เรียก Method ผ่าน Object == Run FN
// FN => สร้าง Context => solve this => thid == current execution conetext


// ###################################
// ### 5. Execution Context == Caller
// ###################################

// Global(Browser) : window object
// window.alert("I'm Global");
// this.alert("I'm Global this");
// alert("I'm execute in window");


// FN Declaration จะทำให้ sayHi ไปติดใน WindowObj
// Hoisting
function sayHi() {
    console.log(this); // window
}
var a = 'm';

// Execute Context = Window
window.sayHi();
this.sayHi();
sayHi();

// Function Context

var name = 'Codecamp';
function sayHello() {
    console.log(this.name);
}

sayHello();

const user = {
    name: 'John',
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`);
    },
    scrm: function () {
        console.log(`scream by ${this.name}`);
    }
};

// user Caller
user.say();
// SUMMARY : this == Object Caller

// Arrow ไม่มีความสามารถในการสร้าง Context
// Loose Context => Chain to Window
user.scream(); // dont use this keyword with arrow function
user.scrm();


 



