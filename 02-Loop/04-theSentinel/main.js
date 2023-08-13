let key
let value
let object = {}

do {
    key = prompt('Enter Key');

    if(key == 'stop') {
        break;
    } else {        
        value = prompt('Enter Value');

        if(value == 'stop') {
            object[key] = '';
            break;
        } else {
            object[key] = value;
        }
    }

} while(value != 'stop' && key != 'stop');

console.log(object);