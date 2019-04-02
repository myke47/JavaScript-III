/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding or Window Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding 
*
* write out a code example of each explanation above
*/

// Principle 1

// console.log(this);

// code example for Window Binding

// Principle 2

const myObj = {
      greeting: 'Hello',
      speak: function() {
        console.log('implicit this: ===', this);
        return '${this.greeting}, world!'
      }
    };
    myObj.speak();

// code example for Implicit Binding

// Principle 3

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  newman.speak();
  newman.speak();

// code example for New Binding

// Principle 4

const myObj2 = {
    greeting: 'Hello',
    speak: function() {
      console.log('implicit this: ===', this);
      return '${this.greeting}, world!'
    }
  };
  
  myObj2.speak();
  
  function Person(obj)  {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
      console.log('This new binding' ,this);
      return 'Hello, my name is ${this.name}, and I am ${this.age} years old!';
    }
  }
  
  const myke = new Person({name: 'Myke', age: 40});
  const nevan = new Person({name: 'Nevan', age: '13'});
  
  nevan.speak.call(myke); 
  myke.speak.apply(nevan);

// code example for Explicit Binding