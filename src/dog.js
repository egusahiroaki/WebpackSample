export class Dog {

  constructor() {
    console.log('dog initialize');
    this.name = '';
  }

  echoMyName() {
    console.log(this.name);
  }
}
