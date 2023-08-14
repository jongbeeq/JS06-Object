let currentValue = 0;

function Accumulator(startingValue) {
    this.currentValue = currentValue + startingValue;
    this.read = function (num) {
        this.currentValue = this.currentValue + num;
        return this.currentValue
    };
    this.show = function () {
        alert(this.currentValue);
    };
}

let obj = new Accumulator(5)
console.log("start");
console.log(obj);

console.log("step 2");
obj.read(6);
obj.show();
console.log(obj);

console.log("step 3");
obj.read(7);
obj.show();
console.log(obj);