// //! Приклад-алгоритм приготування кави за допомогою функції "Приготування кави"
// console.warn("Приклад функції \"Приготування кави\":");
// let groundCoffee;
// let hotWater;
// let coffee;

// //! 1 - функція "Приготування меленої кави"
// function makesGroundCoffee(insideGroundCoffee1) {


//     console.log(insideGroundCoffee1);
//     groundCoffee = insideGroundCoffee1;
//     console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee));
//     return groundCoffee;
// };

// //! 2 - функція "Приготування окропу (гарячої води)".
// function makesHotWater(insideHotWater) {
//     hotWater = insideHotWater;
//     console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater));
//     return hotWater;
// };

// //! 3 - функція "Приготування кави"
// function makingCoffee(insideGroundCoffee, insideHotWater, callback1, callback2) {
//     console.log(insideGroundCoffee, insideHotWater);
//     console.log(callback1);
//     console.log(callback2);
//     if (!(callback1(insideGroundCoffee))) {
//         return "Потрібна мелена кава!";
//     };

//     if (!(callback2(insideHotWater))) {
//         return "Потрібна гаряча вода!";
//     };

//     coffee = groundCoffee + hotWater;
//     coffee = "✅ Кава готова!"
//     return coffee;
// };

// console.log(makingCoffee("30 грам", '250 мілілітрів', makesGroundCoffee, makesHotWater));

// console.log(makingCoffee); //? передача посилання на функцію

// console.log("--------------------------------------------");

//! Стрілкові(cтрілочні) функції
console.warn("Стрілкові(cтрілочні) функції:");
//? Стрілочні функції мають скорочений, лаконічніший синтаксис,
//? що зменшує обсяг коду, особливо коли функція маленька
//? або якщо вона використовується як колбек.
//? Усі стрілки створюються як функціональний вираз (function expression),
//? і якщо функція - не анонімна, її необхідно присвоювати змінній.
//todo: Звичайне оголошення функції:
function classicAdd(a, b, c) {
    return a + b + c;
};
console.log("classicAdd(1, 2, 3);", classicAdd(1, 2, 3)); //! 6
console.log(". . .  . . . .  . . . . . . . . . . . . . . . . . . . .");

//? Якщо у стрілковій функції є декілька параметрів ,
//? то вони перераховуються через кому в круглих дужках,
//? так само, як в приладі з function classicAdd(a, b, c),
//? між знаками дорівнює = та стрілкою =>.
//todo: Оголошення функції стрілочною функцією (декілька параметрів):
const arrowAdd = (a, b, c) => {
    return a + b + c;
};
console.log("arrowAdd(10, 20, 30);", arrowAdd(10, 20, 30)); //! 60
console.log(". . .  . . . .  . . . . . . . . . . . . . . . . . . . .");

//? Якщо параметр один, його можна оголошувати без круглих дужок.
//todo: Оголошення функції стрілочною функцією (один параметр):
const add = a => {
    return a + 5;
};
console.log("add(10);", add(10)); //! 15
console.log(". . .  . . . .  . . . . . . . . . . . . . . . . . . . .");

//? Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки..
//todo: Оголошення функції стрілочною функцією (параметри відсутні):
const greet = () => {
    return "Привіт!"
};

console.log("greet();", greet()); //! 15
console.log("-------------------------------------------------------");





//! Явне та неявне повернення
//? У стрілочної функції після символу =>
//? знаходиться її тіло.
//? Існує два варіанти: з фігурними дужками і без них.


//! Явне повернення
console.warn("Явне повернення:");
//? Якщо є фігурні дужки, і функція повинна повертати якесь значення, 
//? необхідно явно поставити return. 
//? Це називається явне повернення (explicit return). 
//? Такий синтаксис використовується у разі, 
//? якщо в тілі функції потрібно виконати ще якісь інструкції, 
//? крім повернення значення.
const arrowAdd2 = (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;
};
console.log("arrowAdd2(100, 200, 300);", arrowAdd2(100, 200, 300)); //! 600
console.log("-------------------------------------------------------");


//! Неявне повернення
console.warn("Неявне повернення:");
//? Якщо фігурні дужки відсутні,
//? то повертається результат виразу,
//? який стоїть після =>.
//? Це називається неявне повернення (implicit return).
//?  У прикладі повернеться результат виразу додавання параметрів a, b і c.
const arrowAdd3 = (a, b, c) => a + b + c;
console.log("arrowAdd2(1000, 2000, 3000);", arrowAdd2(1000, 2000, 3000)); //! 6000
console.log("-------------------------------------------------------");


//! Псевдомасив arguments
console.warn("Псевдомасив arguments:");
//? У стрілочних функцій НЕМАЄ локальної змінної arguments, 
//? що містить усі аргументи. 
//? Якщо необхідно зібрати всі аргументи в масив, 
//? використовується операція rest.
const add4 = (...args) => {
    console.log("args:", args);
};

add4(1, 2, 3); //! args: [1, 2, 3]
console.log("-------------------------------------------------------");

//! Приклад-алгоритм приготування кави за допомогою функції "Приготування кави"
console.warn("Приклад функції \"Приготування кави\":");
let groundCoffee;
let hotWater;
let coffee;

//! 1 - функція "Приготування меленої кави"
const makesGroundCoffee = (insideGroundCoffee1) => {


    console.log(insideGroundCoffee1);
    groundCoffee = insideGroundCoffee1;
    console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee));
    return groundCoffee;
};

//! 2 - функція "Приготування окропу (гарячої води)".
const makesHotWater = (insideHotWater) => {
    hotWater = insideHotWater;
    console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater));
    return hotWater;
};

//! 3 - функція "Приготування кави"
const makingCoffee = (insideGroundCoffee, insideHotWater, callback1, callback2) => {
    console.log(insideGroundCoffee, insideHotWater);
    console.log(callback1);
    console.log(callback2);
    if (!(callback1(insideGroundCoffee))) {
        return "Потрібна мелена кава!";
    };

    if (!(callback2(insideHotWater))) {
        return "Потрібна гаряча вода!";
    };

    coffee = groundCoffee + hotWater;
    coffee = "✅ Кава готова!"
    return coffee;
};

console.log(makingCoffee("30 грам", '250 мілілітрів', makesGroundCoffee, makesHotWater));

console.log(makingCoffee); //? передача посилання на функцію

console.log("--------------------------------------------");