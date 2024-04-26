// 1
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 2
  var randomNumber = getRandomInt(1, 100);
  console.log(randomNumber);
  
  var numberVariable = 42;
  console.log(numberVariable);
  
  var stringVariable = "Hello, world!";
  console.log(stringVariable);
  
  var booleanVariable = true;
  console.log(booleanVariable);
  
  var undefinedVariable;
  console.log(undefinedVariable);
  
  var nullVariable = null;
  console.log(nullVariable);

  // 3
  var firstNumber = 10;
  var secondNumber = 20;
  var sum = firstNumber + secondNumber;
  
  console.log(sum);
  