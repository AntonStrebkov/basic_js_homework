// "use strict";
// /* Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3. */

// const num1 = Number(prompt("Введите первое число"));
// const num2 = Number(prompt("Введите второе число"));
// if (num1 <= 1) {
//   alert(`Первое число ${num1} меньше или равно 1`);
// } else {
//   alert(`Первое число ${num1} больше 1`);
// }

// if (num2 >= 3) {
//   alert(`Второе число ${num2} больше или равно 3`);
// } else {
//   alert(`Первое число ${num2} меньше 3`);
// }

// /* Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// } */

// let test = true;
// test === true ? console.log("+++") : console.log("---");

/* Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число 
(в первую, вторую или третью). */

// const day = Number(prompt("Введите число от 1 до 31"));
// switch (true) {
//   case day <= 10 && day < 11 && day > 0:
//     console.log("Первая декада");
//     break;
//   case day <= 20 && day < 21 && day > 0:
//     console.log("Вторая декада");
//     break;
//   case day <= 31 && day > 0:
//     console.log("Третья декада");
//     break;
//   default:
//     console.log("Введите верное число");
//     break;
// }

let day = Number(prompt("Введите число от 1 до 31"));
if (day < 0) {
  day = Number(prompt("Число должно быть положительным"));
}
switch (true) {
  case day < 11:
    console.log("Первая декада");
    break;
  case day < 21:
    console.log("Вторая декада");
    break;
  case day < 32:
    console.log("Третья декада");
    break;
  default:
    console.log("Введите верное число");
    break;
}

/* Задание 4
Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц. */

// const number = Number(prompt("Введите число")); //123
// alert(
//   `В числе ${number} количество сотен: ${parseInt(
//     (number / 100) % 10
//   )}, десятков: ${parseInt((number / 10) % 10)}, единиц: ${number % 10}`
// );
