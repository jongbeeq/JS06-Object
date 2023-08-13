// ############# 10 ส.ค 66
// console.log('learn object');

// // Datatypes
// // - Primitive : Boolean,Number,String etc....
// // - Non Primitive : Object

// // ######################
// // ####object declaration
// // ######################
// // {} == stand foe Object / Scope
// // { record_1 , record_2 ,record_3, ......}
// // each record => <key_name>:<value>
// // <value> any data type
// // <key_name> Datatype : string
// // record === property (คุณสมบัติ,สิ่งที่มี) == key-value pair

// let user = {
//     firstName : "Pavit",
//     lastName : "Pimchanagul",
//     age: 18,
//     isAdmin: true,
//     'like human': true
// };

// console.log(user);

// // #############################
// // #### Access , Modify , Delete
// // ############################

// // Every action NEED <KEY_NAME> !!
// // Dot Notation <object>.<key_name>
// // ถ้าไม่มี record => return undefined
// // ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้

// // GET,POLL,READ
// console.log(user);
// console.log(user.firstName === 'Pavit');
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.isAdmin);
// console.log(user.salary);
// // console.log(user.like human);

// // MODIFY,UPDATE
// // SYNTAX : <object>.<old_key> = newValue
// user.firstName = 'Pravit';

// user.age = 25
// user.age += 2;
// user.age++;
// console.log(user.age);


// // ADD
// // SYNTAX : <object>.<new_key> = newValue
// user.address = 'bangkok';
// console.log(user);


// // Delete
// // SYNTAX : delete <obj>.<key_name>

// delete user.isAdmin;
// console.log(user);


// // #############################
// // #### NESTED Object
// // ############################

// const employee = {
//     fullName: "John Doe",
//     salary: 500_000,
//     address: {
//         district : "Phaya Thai",
//         province : "Bangkok",
//         country : "Thailand",
//     },
// };

// console.log(employee.salary);
// console.log(employee.address.province);
// console.log(employee.address.district);
// console.log(employee.address.village);

// employee.address.province = "Nonthaburian";
// delete employee.address.country;

// // Prevent Crash !!
// // Dot ใช้กับ Object เท่านั้น !! <obj>.<key>
// // ห้ามมมมมมมมมมมมมม ใช้กับ undefined <undefined>.<key>
// // วิธีแก้ optional chainin =>  <undefined>?.<key>

// console.log(employee.addr);
// // console.log(employee.addr.province); // undefine.province
// console.log(employee.addr?.province);
// console.log(employee.address?.province);
// console.log(employee.address?.village);


// // #############################
// // #### 4. Check key ?
// // ############################


// const product = {
//     id: 227,
//     name: 'IPhone',
//     price: 50_000,
//     // discount: 0.05,
//     'is mobile': true
// };

// console.log(product.discount); // undefined

// // 'name' in product // => true,false

// // IN Operator
// // Syntax : <key_name_string> in <obj> => Bool
// console.log('name' in product);
// console.log('discount'  in product);


// // method hasOwnProperty
// // Syntax : <key_name_string> hasOwnProperty <obj> => Bool
// console.log(product.hasOwnProperty('name'));
// console.log(product.hasOwnProperty('discount'));


// // #############################
// // #### 5. Bracket Notation []
// // ############################

// // Syntax : <obj>[ "<key_aname_string>" ]\
// // *** 1 ฬช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
// // *** 2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // Computted key
// // Access key-value ผ่านชื่อตัวแปรได้

// product.id;
// product['id'];

// console.log(product.id);
// console.log(product['id']);


// // console.log(product.is mobile) crash
// console.log(product['is mobile']);

// product['name'] = 'Iphone-15';
// console.log(product);

// let aaaaa = 'name';

// console.log(product[aaaaa]);
// console.log(product.aaaaa);
// console.log(product['name']);//product.aaaaa === product['aaaaa'] === undefined


// // #############################
// // #### 6. Property Shorthand
// // ############################
// /*
// {
//     username : <value in useername variable>
//     age : <value in age variable>
// }
// ./
// let username = prompt('username');
// let email = prompt('email');
// let password = prompt('password');

// const info = {username, email, password};








//###################################################


// ########## สรุปเช้า 11 ส ค 66
// ###### OBJECT ##############

const user = {
    name: 'John',
    age: 33,
    isMarried: false,
    address: {
        village: 'Ladda Land',
        provine: 'Chiangmai'
    }
};

let log = console.log;

// GET DATA
log(user.name);
log(user['name']);

let a = 'name';
log(user.a); // วิ่งไปหา  key a =>  undefined
log(user[a]); // user['name'] => john
// Note : เมื่อชื่อ key ถูกเก็บไว้ในตัวแปรรต้อง ฟแแำหห ผ่าน []

// DELETE

// delete user.isMarried;
log(user);
// delete user['age'];
log(user);

let b = 'address';
// delete user[b];
log(user);


// UPDATE
let x = 5;
x = x + 2;
x += 2;
// container = value + 2

user.age = user.age + 1
user.age += 1;
log(user.village);
// container = value + 1


user['age'] = user['age'] + 5;
log(user.age);

user['age'] += 5 ;
log(user.age);

user['age']++;
log(user.age);


// use key variable
let key = 'age'
let z = key

user[key] = user[key] + 2;
user[z] = user[z] + 2;


console.log(user[key]);
console.log(user[z]);


// CRITICAL Point
// - bracket notation ใช้กับคีย์ที่เป็น string หรือตัวแปรที่เก็บ string
// - for( <key> in <obj> ) JS จะ auto reassign key ใหม่ให้ทุกรอบ (string)
// - obj [key] = ob[key] + new => container = value + new