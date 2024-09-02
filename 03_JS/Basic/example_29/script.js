/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  class MyClass {
    constructor(prop1, prop2) {
      this.prop1 = prop1;
      this.prop2 = prop2;
    }

    method1() {
      console.log('This is method 1');
    }

    method2() {
      console.log('This is method 2');
    }
  }

  const instance = new MyClass('value1', 'value2');
  console.log(instance.prop1); // Output: value1
  instance.method1(); // Output: This is method 1

  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }

  const dog = new Dog('Rex');
  dog.speak(); // Output: Rex barks.

  class MathUtility {
    static add(a, b) {
      return a + b;
    }
  }

  console.log(MathUtility.add(5, 10)); // Output: 15

  class Rectangle {
    #height = 0;
    #width = 0;

    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }

    #calculateArea() {
      return this.#height * this.#width;
    }

    getArea() {
      return this.#calculateArea();
    }
  }

  const rect = new Rectangle(10, 5);
  console.log(rect.getArea()); // Output: 50
  // console.log(rect.#height); // Error: Private field '#height' must be declared in an enclosing class

  class Person {
    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    set name(newName) {
      this._name = newName;
    }
  }

  const person = new Person('Alice');
  console.log(person.name); // Output: Alice
  person.name = 'Bob';
  console.log(person.name); // Output: Bob
})();
