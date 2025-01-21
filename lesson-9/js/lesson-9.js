//! Завдання 1

//? Напиши функцію logItems(array), яка отримує масив і використовує цикл for,
//?  який для кожного елемента масиву буде виводити в консоль повідомлення
//?   в форматі[номер елемента]-[значення елемента].

//! Код виконаного завдання

const arrayNum = [8, 13, 21, 34, 55];

const arrayNum1 = [80, 130, 210, 340, 550]


function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`позиція елемента ${i} `, array[i]);
        console.log("-----------------------");
     };
};

logItems(arrayNum);

logItems(arrayNum1);

console.log("-----------------------");




