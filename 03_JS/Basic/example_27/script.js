/** This example was designed to run in a web browser's JavaScript console,
 * but it can also be run with Node.js as long as it doesn't include DOM examples. */

(function () {
  'use strict';

  const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
  };

  console.log(car);

  const handsome = {
    name: 'Nestor',
    lastName: 'Aldana',
    year: 1994,
  };

  console.log(handsome);

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const myCar = new Car('Ford', 'Mustang', 1969);
  console.log(myCar);

  const animal = {
    type: 'Invertebrates',
    displayType() {
      console.log(this.type);
    },
  };
  const fish = Object.create(animal);
  fish.type = 'Fishes';
  fish.displayType(); // Logs: "Fishes"

  const person = {
    name: 'Néstor',
    lastName: 'Aldana',
  };

  console.log(person.name);
  console.log(person.age); // Undefined
  person.age = 23; // defined later
  person.name = 'Nexxtor'; // Change value
  console.log(person.age);

  delete person.age; // Delete a property
  console.log(person.age);
  console.log('age' in person); // Age exists in person?
  console.log('name' in person); // Name exists in person?

  const obj = { a: 1, b: 2 };
  for (const key in obj) {
    console.log(key, obj[key]);
  }

  const myObj = { name: 'Alice' };
  myObj.age = 25; // Add a property
  delete myObj.name; // Delete a property
})();
