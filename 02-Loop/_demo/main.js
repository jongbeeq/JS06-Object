const user = {
    firstName: 'Codecamp',
    lastName: 'Software Park',
    age: 15,
    key: 'JaAe'
};

// For IN : Loop though Object
// for (let <key_variable> in <obj>) {}

for (let key in user) {

    console.log(`KEY: ${key}`); // auto dynamics assign by JS in <string>
    //1st : let key ="firstName"
    //2nd : let key ="lastName"
    //3rd : let key ="age"



    console.log(`VAL : ${user[key]}`); // need to access by bracket , computed key
    //1st : user[key] == user['firstName'] ==> Codecamp
    //2nd : user[key] == user['lastName'] ==> Software Park
    //3rd : user[key] == user['age'] ==> 15

    console.log(user.key);
    console.log('\n');
    //1st : user.key == user['key'] ==> undefine
    //2nd : user.key == user['key'] ==> undefine
    //3rd : user.key == user['key'] ==> undefine


}




// for (    in      ) {}

// 'firstName' in user; // true
// `age` in user; // true
// `phone` in user; // false



// a variable ที่เก็บชื่อ key
// // และเปลี่ยนใหม่ทุกครั้งที่ลูป
// for(let a in product) {
// // 1st : let a = "id"
// // 2nd : let a = 'name'
// // 3rd : let a = 'price'
// // console.log(a)
// console.log(a, product[a])
// product[a] = product[a] + 50// oldvalue + update
// }