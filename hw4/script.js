"use strict";
/*
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 !== 0) {
    console.log(`${i} - нечетное число`);
  } else {
    console.log(`${i} - четное число`);
  }
}

/*
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.splice(3, 2));
console.log(arr);

/*
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

const arr = [];
for (let i = 0; i < 5; i++) {
  let r = Math.floor(Math.random() * 10);
  arr.push(r);
}
console.log(arr);
let result = 0;
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log(`Сумма чисел в массиве = ${result}`);
minElement = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (minElement > arr[i]) {
    minElement = arr[i];
  } else {
    continue;
  }
}
console.log(`Минимальный элемент массива = ${minElement}`);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    console.log("В массиве присутствует число 3");
  } else {
    continue;
  }
}

/*
*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

let str = "";
for (let i = 0; i < 20; i++) {
  str += "x";
  console.log(str);
}
