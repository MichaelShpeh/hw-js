//! ПРАКТИКА-7 (Урок-07_JS)
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? 1-1.Створити змінну <array> значення якої
//? є масив із п'яти елементів,
//? де упереміш присутні числа та рядки.
//? Вивести в консоль значення змінної <array>.
//? Вивести в консоль значення кожного єлемента змінної(масиву) <array>.
console.log(
    "%c [1-1] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

const array = [1, "Mykhailo", 2, "David", 3];

console.log("Наш масив: ", array);

console.log("Наш елемент: 0 ", array[0]);

console.log("Наш елемент: 1 ", array[1]);

console.log("Наш елемент: 2 ", array[2]);

console.log("Наш елемент: 3 ", array[3]);

console.log("Наш елемент: 4 ", array[4]);

console.log("-------------------------------------------");

//? 1-2.Додати до 2-го(другого) та 3-го(третього)
//? елемента 1 і вивести їх значення в консоль.
//? Вивести в консоль значення змінної(масиву) <array>.
console.log(
    "%c [1-2] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

array[1] = array[1] + 1;

console.log("Наш елемент: 1 ", array[1]);

array[2] = array[2] + 1;

console.log("Наш елемент: 2 ", array[2]);

console.log("Наш масив: ", array)

console.log("-------------------------------------------");

//? 1-3.Виміряти довжину масиву [array]
//? та вивести це значення в консоль.
console.log(
    "%c [1-3] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

const arrayLenght = array.length;

console.log("Наш масив: ", arrayLenght);


console.log("-------------------------------------------");

//? 1-4.Отримати индекс та значення
//? останнього елемента масиву <array>.
//? Вивести ці значення в консоль.
console.log(
    "%c [1-4] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

const myArray = [1488, 'Hello', 3.14, 'World', 'JavaScript']

console.log('myArray:', myArray)
for (let i = 0; i < myArray.length; i++) {
    console.log(`myArray[${i}]: ${myArray[i]}`);
};

console.log("-------------------------------------------");

//? 2-1.Вивести в консоль значення кожного
//? елемента масиву [array] за допомогою цикла for.
console.log(
    "%c [2-1] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (let i = 0; i < array.length; i++) {
    console.log(`елемент ${i}: ${array[i]}`);
};

console.log("-------------------------------------------");

//? 2-2.Додати до 2-го(другого) та 3-го(третього)
//? елемента 1 за допомогою цикла for
//? і вивести їх значення в консоль.
//? Вивести в консоль значення масиву [array].
console.log(
    "%c [2-2] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (let i = 0; i < array.length; i++) {

    if (i === 1 || i === 2) {
        array[i] = array[i] + 1;
        console.log(`елемент ${i}: ${array[i]}`);
    };
};

console.log("-------------------------------------------");

//? 2-3.Вивести в консоль значення кожного
//? елемента масиву [array] за допомогою цикла for...of.
console.log(
    "%c [2-3] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (const element of array) {
    console.log(`елемент ${element}: ${element}`);
};

console.log("-------------------------------------------");

//? 2-4.Знайти ПЕРШЕ ЧИСЛОВЕ значення
//? елемента масиву [array] за допомогою цикла for...of
//? та використовуючи оператор break.
//? Вивести це значення в консоль.
console.log(
    "%c [2-4] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (const element of array) {
    if (element === Number(element)) {
        console.log("Перший елемент число: ", element);
        break;
    };
};

console.log("-------------------------------------------");

//? 2-5.Знайти ПЕРШЕ РЯДКОВЕ значення
//? елемента масиву [array] за допомогою цикла for...of
//? та використовуючи оператор break.
//? Вивести це значення в консоль.
console.log(
    "%c [2-5] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (const value of array) {
    console.log(value);
    break;
};

console.log("-------------------------------------------");

//? 2-6.Знайти ВСІ ЧИСЛОВІ значення
//? елементів масиву [array] за допомогою цикла for...of
//? та використовуючи оператор continue.
//? Вивести ці значення в консоль.
console.log(
    "%c [2-6] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання



for (let numberValue of array) {
    if (numberValue === Number(numberValue)) {
        console.log(numberValue);
    } else {
        continue;
    };
};

console.log("-------------------------------------------");

//? 2-7.Знайти ВСІ РЯДКОВІ значення
//? елементів масиву [array] за допомогою цикла for...of
//? та використовуючи оператор continue.
//? Вивести ці значення в консоль.
console.log(
    "%c [2-7] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (numberValue of array) {
    if (numberValue === String(numberValue)) {
        console.log(numberValue);
    } else {
        continue;
    };
};

console.log("-------------------------------------------");

//? 2-8.Знайти ВСІ тільки ЧИСЛОВІ значення
//? елемента масиву [array] за допомогою цикла for...of,
//? змінити їх ти на рядковий та додати 1.
//? Вивести ВСІ значення масиву [array] в консоль,
//? використовуючи оператор continue.
//? Вивести в консоль значення масиву [array].
console.log(
    "%c [2-8] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (numberValue of array) {
    if (numberValue === Number(numberValue)) {
        numberValue = String(numberValue + 1);
        console.log(numberValue);
    } else {
        continue;
    };
};

for (numberValue of array) {
    console.log(numberValue);
    continue;
};

console.log(array);

console.log("-------------------------------------------");

//? 2-9.Знайти ВСІ тільки ЧИСЛОВІ значення
//? елемента масиву [array] за допомогою цикла for,
//? змінити їх ти на рядковий та додати 1.
//? Вивести ВСІ значення масиву [array] в консоль,
//? використовуючи оператор continue.
//? Вивести в консоль значення масиву [array].
console.log(
    "%c [2-9] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (let i = 0; i < array.length; i++) {
    if (array[i] == Number(array[i])) {
        array[i] = String(array[i] + 1);
    };
};

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    continue;
};

console.log(array);

console.log("-----------------------------------------------------");