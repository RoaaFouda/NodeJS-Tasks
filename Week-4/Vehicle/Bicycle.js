import {Vechile} from './Vehicle.js';

export class Bicycle extends Vechile {
    constructor(color="blue", numberOfWheels=2, horn="honk honk"){
     super(color, numberOfWheels, horn);
    }
     
};