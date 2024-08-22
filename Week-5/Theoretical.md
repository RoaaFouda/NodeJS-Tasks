# Theoretical

## The difference between synchronous and asynchronous code.
* Synchronouse code is executed sequentially, line by line. Even if a specific function in the code takes a lot of time to execute then it will be blocking all of the code after it until it's done.

* Asynchronouse code is basically the opposite, it does not block the code after it. If an asynchronous function takes a lot of time to finish executing (eg. fetching data from a database etc..) all the code after it will be executed normally.

## Factory
For this design pattern, we create a class to be responsible for creating all of our objects instead of creating them using the `new` keyword each time. Here are some of the cases where we'd use it:
* You want the client to be able to create objects but not know how the classes are implemented.
* The creation of the object has some complex logic.
* You decide the type of the object at runtime.

Here's an example: 
```js
class Vehicle {
    constructor(name, color, model){
        this.name = name;
        this.color = color;
        this.mdoel = model;
    }

    drive(){
        console.log(`I'm driving a ${this.color} vehicle called ${this.name} of model ${this.model}`)
    }
}

class Car extends Vehicle {
    constructor(name, color, model, capacity){
        super(name, color, model);
        this.capacity = capacity;
    }

    drive(){
        console.log(`I'm driving a ${this.color} car called ${this.name} of model ${this.model}`)
    }
}

class Truck extends Vehicle {
    constructor(name, color, model, wheels){
        super(name, color, model);
        this.wheels = wheels;
    }
    drive(){
        console.log(`I'm driving a ${this.color} truck called ${this.name} of model ${this.model}`)
    }
}

class Factory{

    createVehicle(name, color, model, attribute, type){
        switch(type){
            case 'Car':
                return new Car(name, color, model, attribute);
                
            case 'Truck':
                return new Truck(name, color, model, attribute); 
        }
    }
}

const VehiceFactory = new Factory();
const truck1 = VehiceFactory.createVehicle("jojo", "black", "corolla", 4, "Truck");
const car1 = VehiceFactory.createVehicle("jojiee", "Silver", "gt", 3000, "Car");
console.log(truck1);
console.log(car1);
```