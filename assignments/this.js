/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding or Window Binding - refers to being in the Global Scope, the value of 'this' is the entire window or console object;

* 2. Implicit Binding - when a function is called by a preceeding dot, the object left of the dot gets 'this' assignment;

* 3. New Binding - When a constructor function is used, 'this' refers to the specific instance of the object created and returned by the constructor function;

* 4. Explicit Binding - When the 'call' or 'apply' method is used, 'this' is explicitly defined. 
*
* write out a code example of each explanation above
*/

// Principle 1

// console.log(this);

// code example for Window Binding

// Principle 2

// const myObj = {
//       greeting: 'Hello',
//       speak: function() {
//         console.log('implicit this: ===', this);
//         return '${this.greeting}, world!'
//       }
//     };
//     myObj.speak();

// code example for Implicit Binding

// Principle 3

// function CordialPerson(greeter) {
//     this.greeting = 'Hello ';
//     this.greeter = greeter;
//     this.speak = function() {
//       console.log(this.greeting + this.greeter);
//       console.log(this);
//     };
//   }
  
//   const jerry = new CordialPerson('Newman');
//   const newman = new CordialPerson('Jerry');
  
//   newman.speak();
//   newman.speak();

// code example for New Binding

// Principle 4

const myObj2 = {
    greeting: 'Hello',
    speak: function() {
      console.log('implicit this: ===', this);
      return `${this.greeting}, world!`
    }
  };
  
  myObj2.speak();
  
  function Person(obj)  {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
      console.log(`This new binding` ,this);
      return `Hello, my name is ${this.name}, and I am ${this.age} years old!`;
    }
  }
  
  const myke = new Person({name: 'Myke', age: 40});
  const nevan = new Person({name: 'Nevan', age: '13'});
  
  // nevan.speak.call(myke); 
  // myke.speak.apply(nevan);

// code example for Explicit Binding