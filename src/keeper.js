export class Keeper {
  constructor() {
    // initialize
    this.dog = null;
  }

  hasDog() {
    this.dog === null ? 
      console.log('no dog') : console.log('yes, dog!');
  }

  // Dog obj
  startToHaveDog(dog) {
    this.dog = dog;
    this.dog.name = 'pochi';
    this.dog.echoMyName();
  }
}
