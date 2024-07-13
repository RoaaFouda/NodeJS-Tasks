let date = new Date(2022, 10, 3, 12, 38);

Date.prototype.addHours = function(){
    this.setHours(this.getHours()+4);
    return this;
}

date.addHours(4);
console.log(date);


function* fibGenerator(){
    let a = 0;
    let b = 1;
    let next;
    yield 0;
    yield 1;

    while(true){
    next = a+b;
    yield next;
    a = b;
    b = next;
    }
}

const fibGen = fibGenerator();

console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);

