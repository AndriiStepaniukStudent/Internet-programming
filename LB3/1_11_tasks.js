//1
function average(...args) {
    let sum = args.reduce((acc, val) => acc + val, 0);
    return sum / args.length;
}

//2
function values(f, low, high) {
    let result = [];
    for (let i = low; i <= high; i++) {
        result.push(f(i));
    }
    return result;
}

//3
function callWithContext(obj, callback) {
    callback.call(obj);
}

let person = {
    name: 'John',
    age: 30,
    birthday: 'April 26'
};

function birthdayGreeting() {
    let date = new Date().toLocaleDateString();
    console.log(`Today is ${date}! Happy birthday ${this.name}.`);
}

callWithContext(person, birthdayGreeting);

//4
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        }
    };
}

//5
function getGreeting() {
    let lastCalled = '';
    return function(name) {
        if (name === lastCalled) {
            return `Hello ${name} (Cached)`;
        } else {
            lastCalled = name;
            return `Hello ${name}`;
        }
    };
}

//6
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

//7
function isIncludedInArray(arr) {
    return function(text) {
        return arr.includes(text);
    };
}

//8
let array = [{ name: 'john' }, { name: 'alice' }, { name: 'bob' }];

let capitalizeNames = array => array.map(obj => ({ name: obj.name.charAt(0).toUpperCase() + obj.name.slice(1) }));

//9
//call
const personJohn = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  const fullName = personJohn.fullName.call(personJohn);
  console.log(fullName);

//apply
const numbers = [1, 2, 3, 4, 5];
const max = Math.max.apply(null, numbers);
console.log(max);

//bind
const greet = function() {
    return `Привіт, ${this.name}!`;
  };
  
const person1 = { name: 'Анна' };
const person2 = { name: 'Петро' };
const greetPerson1 = greet.bind(person1);
const greetPerson2 = greet.bind(person2);
  
  console.log(greetPerson1());
  console.log(greetPerson2());

//10
function logFunctionCall(callback, ...args) {
    console.log(`Function name: ${callback.name}`);
    console.log(`Arguments: ${args}`);
    console.log(`Call time: ${new Date().toLocaleTimeString()}`);
    callback(...args);
}

//11
function cacheLastCall(callback, timeout = 10000) {
    let lastCalledTime = 0;
    let lastResult = null;

    return function(...args) {
        if (Date.now() - lastCalledTime < timeout) {
            console.log('Using cached result...');
            return lastResult;
        } else {
            lastResult = callback(...args);
            lastCalledTime = Date.now();
            return lastResult;
        }
    };
}
