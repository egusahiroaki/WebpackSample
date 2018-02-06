import {Cat} from "../src/cat";

describe('Catのテスト', function() {
  it('名前はtama', function() {
    const name = "tama";
    const cat = new Cat(name);
    expect(cat.sayYourName()).toBe(name);
  });
});