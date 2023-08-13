// let product = {}

let name = prompt('Enter Name');
let quantity = prompt('Enter Quantity');
// condition(quantity,"Quantity");
let price = prompt('Enter Price');
// condition(price,"Price");
let discount = prompt('Enter Discount');
// condition(discount,"Discount");
let discountNotHave = discount === null || discount == 0 || discount.trim() == "";


let product = { name, quantity, price };

if (!discountNotHave) {
    product.discount = discount + "%";
}

let calPrice = (price , discount) => price - (price * +discount/100);


// for (let key in product) {

     
//     }// else {product.key = product[key];
//     // }

// }




// let product ={  name, quantity, price, discount };



// // ##### เงื่อนไขสร้าง record discount 
// let discountNotHave = discount === null || discount == 0 || discount.trim() == "";

// if (!discountNotHave) {
//     product.discount = discount + "%";
// }

// // console.log(product)
// //####################################



// ##### โปรแกรมรับ input
    // 1. validate data
    // let quantityCondition = quantity === null || quantity.trim() == "" || isNaN(quantity);

    // if (quantityCondition) alert('Please Enter Quantity');

        // สร้างเป็น function
        // function condition(data, nameData) {
        //     while(data === null || data.trim() == "" || isNaN(data)) {
        //         alert(`Please Enter ${nameData}`);
        //         data = prompt(`Enter ${nameData}`);
        //         if (nameData == "Discount") ? 
        //     }
        //     product[`${nameData}`] = data
        // };
//#############################

console.log(product);
console.log(calPrice(price, discount));





// // ##########################################
// // ############## เฉลย ######################

// // #### วิธีคิด #####
// // - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  

// // - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  

// // - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

// // Sub Program-1 : Input
// let name = prompt('Enter Product Name');
// let quantity = +prompt('Enter Quantity');
// let price = Number(prompt('Enter Price'));
// let discount = prompt('Enter Discount') * 1;

// // Sub Program-2 : CreatObject
// // const products = {
// //     name: name // name : 'Hermes'
// //     quantity: quantity, // quantity : 20
// //     price: price, // price : 500_500
// //     discount: discount // discount 0.1
// // };
// // *****เมื่อชื่อ key ตรงกับตัวแปรที่เก็บ value***** สามารถยุบ syntax (Properties short hand)
// const product = {
//     name,
//     quantity,
//     price,
//     discount,
// };
// console.log(product);

// // Sub Program-3 : Calculate Price
// // discount 10%, paid 90%
// // discount 0.1, paid 0.9
// // price,quantity,discount => TotalPrice
// // function calPrice(price,quantity,discount) {
// //     let result = price * quantity * (1 - discount);
// //     //      100 * 10 (1-0.1) => 1000(0.9) => 900
// //     return totalPrice;
// // }

// // let result = calPrice(product.price, product.quantity, product.discount);
// // log(result);

// function calPrice(productObj) {
//     let price = productObj.price
//     let quantity = productObj.quantity
//     let discount = productObj.discount ? productObj.discount : 0;
//     return  price * quantity * (1 - discount/100);
// }
// let result = calPrice(product);
// // let result = calPrice( {name , quantity , price , discount})

// console.log(result);







    





