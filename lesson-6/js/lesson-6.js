//? Вивести на екран всі числа від 1 до 10 за допомогою циклу while.

//! Код виконаного завдання

console.log("Завдання 1");

let number = 1;

while (number <= 10) {
    console.log("число: ", number);
    number += 1;
};

//? Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for.
//? Якщо число не парне, пропустити його за допомогою continue.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 2");

for (number = 2; number <= 20; number += 1) {
    if (number % 2 !== 0) {
        continue;
    }
    console.log("число: ", number);
}



//? Вивести на екран таблицю множення числа 7 за допомогою циклу for.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 3");

for (number = 1; number <= 10; number += 1) {
    console.log("7 * ", number , "= ",  `${7 * number}`);
};

//? Створити масив з числами від 1 до 5. 
//? Вивести на екран кожен елемент масиву за допомогою циклу while.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 4");

let array = [1, 2, 3, 4, 5, 505, 132];

let numberFour = 0;

while (numberFour < array.length) {

    console.log(`${numberFour} елемент циклу:`, array[numberFour]);

    numberFour++;
};
    
//? створити масив із числами від 1 до 10. За допомогою циклу for
//? пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7,
//? закінчити виконання циклу за допомогою оператора break.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 5");


const arrayTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("arrayTen:", arrayTen);
for (let i = 0; i < arrayTen.length; i++) {
    if (arrayTen[i] === 7) break;
    console.log(`arrayTen[${i}] = ${arrayTen[i]}`);
};

//? Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число,
//? що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 6");

const n = 14;

number = 1;

while (number < n) {

    console.log("число", number);

    number++;

    if (number >= n) {
        break;
    };
};

//? За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3.
//?  Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 7");

number = 1;

while (number <= 20) {

    if (number % 3 == 0) {
        number++;
        continue;
    }; 

    console.log("число не кратне 3: ", number);

    number++;
};