import { Dog } from './dog.js';
import { Keeper } from './keeper.js';

var keeper = new Keeper();
var dog = new Dog();
keeper.hasDog();
keeper.startToHaveDog(dog);
keeper.hasDog();