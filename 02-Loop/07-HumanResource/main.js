let log = console.log;

const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };

//Main 1
let input = prompt('Enter Name');

//Main 2
// 2.1
let haveName = false

// 2.2
for (let name in employees) {
    haveName = name == input || haveName;
 }

//Main 3
// let addressDetail = ""

if(haveName) {
    //3.1 ถ้าถูกให้โชว์ Name: john, salary: 1000, address: Ratchathewi, Bangkok
    let detail = "";

    for (let info in employees[input]){
        let subDetail = "";

        if(typeof(employees[input][info]) == 'object') {
            for (let keySubObj in employees[input][info]) {
                subDetail = subDetail + employees[input][info][keySubObj] + ", ";
            }
        } else {
            subDetail = employees[input][info];
        }

        detail = detail + (info + ": " + subDetail) + ", ";
    }

    log(`Name: ${input}, ${detail}`);
} else {
    //3.2 ถ้าผิดให้โชว์ "Not Found"
        console.log("Not Found");    
}







