const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
  };


let object = {};
 
// 1. for ... in loop


// for (let key in notebook) {
//     object[key] = notebook[key];
// }

// 2. Object.assign

Object.assign(object , notebook);


console.log(object)