/* Задание 1
Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Вывести в консоль температуру в Цельсиях и Фаренгейтах. */

const degreesCelsius = 25;
const degreesFahrenheit = (9 / 5) * degreesCelsius + 32;
console.log(`Градусы Цельсия: ${degreesCelsius}
Градусы Фаренгейта: ${degreesFahrenheit}`);

/* Задание 2
Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.*/

const name = "Anton";
const admin = name;
console.log(admin);
