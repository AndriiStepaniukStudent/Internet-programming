// 4
alert("Це приклад повідомлення з використанням alert()");
var userInput = prompt("Будь ласка, введіть ваше ім'я:");
alert("Ваше ім'я: " + userInput);
var isConfirmed = confirm("Ви погоджуєтеся з умовами використання?");
if (isConfirmed) {
  alert("Ви погоджуєтесь з умовами використання.");
} else {
  alert("Ви не погоджуєтесь з умовами використання.");
}

// 5
var age = prompt("Будь ласка, введіть ваш вік:");
console.log("Ваш вік " + age);
