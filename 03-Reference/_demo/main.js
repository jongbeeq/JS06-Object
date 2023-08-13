const log = console.log;
log('Learn Ref.');

// Copied by Value
// Copied by Reference

// PRIMITIVE
let message = ' Hello' ;
let word = message;

log(message);
log(word);

message = 'Hi';
log(message);
log(word);

// Object
// USER เก็บ address ของ Literal Object
let user = {
    name: 'John',
    age: 33
};


// *** Copiedd by Reference
// assign Adress ของ user ให้กับ employee
let employee = user;
log(employee);

user.name = 'Jane';
log(user.name);

employee.name = 'Joe';
log(employee.name);