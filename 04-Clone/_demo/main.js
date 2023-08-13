const log = console.log

log('Object Clone');

let todo = {
    task: "Do HW",
    complete: false,
    due_date: '13-08-2023'
};

// const newTodo = todo;
// newTodo.complete = true;
// log(todo.complete);



// Clone
// const newTodo = {}
// 1.เอาต้นแบบมา loop แล้ว assign ทีละ key:value ให้ object ใหม่

// for(let key in todo) {

//     // assign ทีละ key:value ให้ newTodo
//     newTodo[key] = todo[key];
//     // newTodo['task'] = todo['task] => 'Do HW'
//     // newTodo['complete'] = todo['complete] => false
//     // newTodo['due_date'] = todo['due_date] => '13-08-2023'
// }
// // log(newTodo);
// // newTodo.complete = true;
// log(newTodo.complete);
// log(todo.complete);


// 2.Object.assign
// return address ของ destination (param1)

// 2A
// const newTodo = {};

// MERGE/OVERRIDE Direction : RIGHT -> LEFT
// Object.assign(newTodo,todo);


// 2B
const newTodo = Object.assign({},todo);

log(newTodo);