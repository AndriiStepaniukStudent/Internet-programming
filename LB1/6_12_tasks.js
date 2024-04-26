// 6
let quantity = prompt("Введіть кількість купленого товару:");
let price = prompt("Введіть ціну за одиницю товару:");
let total = quantity * price;
console.log("Сума покупки: " + total);

// 7
let number = prompt("Введіть число:");
if (number < 0) {
    console.log("Число від'ємне");
} else {
    console.log("Число додатнє або нуль");
}

// 8
let dayNumber = prompt("Введіть номер дня тижня:");
let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
console.log("Назва дня тижня: " + days[dayNumber - 1]);

// 9
console.log("Таблиця множення числа 6:");
for (let i = 1; i <= 10; i++) {
    console.log("6 * " + i + " = " + 6 * i);
}

// 10
let n = [1, 2, 3, 4, 5];
console.log("Квадрат третього числа: " + (n[2] ** 2));
console.log("Сума першого і останнього елементів: " + (n[0] + n[n.length - 1]));
let negativeSum = 0;
n.forEach(function (element) {
    if (element < 0) {
        negativeSum += element ** 2;
    }
});
console.log("Сума квадратів від'ємних елементів: " + negativeSum);

// 11
let cars = [
    { owner: "Василь", model: "Toyota", engineVolume: 1.6 },
    { owner: "Олена", model: "Honda", engineVolume: 2.0 },
    { owner: "Ігор", model: "Ford", engineVolume: 1.8 }
];
let minEngineCar = cars.reduce(function (prev, current) {
    return (prev.engineVolume < current.engineVolume) ? prev : current;
});
console.log("Машина з мінімальним об'ємом двигуна:", minEngineCar);

// 12
let a = prompt("Введіть перше число:");
let b = prompt("Введіть друге число:");
let c = prompt("Введіть третє число:");
let d = prompt("Введіть четверте число:");
let result = Math.max(Math.min(a, b), Math.min(c, d));
console.log("Результат: " + result);

// 13
let word = prompt("Введіть слово:");
console.log("Довжина слова: " + word.length);
console.log("Слово в зворотному порядку: " + word.split("").reverse().join(""));
