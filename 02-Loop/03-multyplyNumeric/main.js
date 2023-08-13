// // function multiplyNumeric(obj, num) {}


//     // 1.valdate เลข
//     // let a = 1
//     // let b = 3

// function isNum (a) {
//    return typeof(a) === 'number'
// }
//     // 2.คูณเลข
// function multiplyNumeric(obj, num) {
//     for(let key in obj) {
//         if (isNum(obj[key]))
//         return obj[key] * num;
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
//   };



const multiplyNumeric = (object, num) => {
    for (let key in object) {
        console.log(key);
        
        let value = object[key];
        if (typeof value === 'number') {
            // console.log(value,num);
            // update value
            object[key] = object[key] * num;
            // object[key] = value * num;

            // menu['width'] = 200 * 3
            // menu['height'] = 300 * 3
        }
    }
};

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };


multiplyNumeric(menu,10);
console.log(menu);

// let menuObj = {
//     width: 200,
// };

// menuObj.width = menuObj.width * 2;
// menuObj.['width'] = menuObj.['width'] * 2;

// // ในแต่ละรอบของ Loop for ..in
// let key = 'width';
// menuObj[key] = menuObj[key] * 2;




