// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2 ^ 3 степени + 3 ^ 3 степени

function cubeNumber(number) {
    console.log(number ** 3);
}
cubeNumber(2);
cubeNumber(3);

// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
let maney = Number(prompt('Введите размер заработной платы'));

if (isNaN(maney)) {
    alert('Значение задано неверно!');
}

const wages = (maney) => {
    maney = maney * 0.87;
    console.log(maney);
}
wages(maney);

// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
let c = Number(prompt('Введите третье число'));
const maxNumber = Math.max(a, b, c);
console.log(maxNumber);


// Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление


function summNumber(num1, num2) {
    summ = num1 + num2;
    console.log(summ);
}

function diffNumber(num1, num2) {
    max = Math.max(num1, num2);
    min = Math.min(num1, num2);
    diff = max - min;
    console.log(diff);
}

function multiplNumber(num1, num2) {
    multipl = num1 * num2;
    console.log(multipl);
}

function divNumber(num1, num2) {
    div = num1 / num2;
    console.log(div);
}
let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
summNumber(num1, num2);
diffNumber(num1, num2);
multiplNumber(num1, num2);
divNumber(num1, num2);