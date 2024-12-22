//? Hапиши скрипт перевірки типу змінної <emptyString1>
//? за допомогою конструкції «if...else» або «if...else...if».
let emptyString1;
// emptyString1 = "";
// emptyString1 = " ";
// emptyString1 = "1";
// emptyString1 = 1;
// emptyString1 = null;
// emptyString1 = false;
// emptyString1 = true;
// emptyString1 = 0;
// emptyString1 = "0";
console.log("emptyString1:", emptyString1); //! 
console.log("typeof emptyString1:", typeof emptyString1); //! string
console.log("Number(emptyString1):", Number(emptyString1)); //! 0
console.log("-------------------");

//? Перевірка на "що це" (який тип значення)?:

// if (emptyString1 === "") {
//     console.log("Це пустий рядок")
// } else if (emptyString1.trim() === "") {
//     console.log("Тут є пробіл")
// } else if (emptyString1 === Number(emptyString1)) {
//     console.log("Це число")
// } else if (emptyString1.trim().length === Number(emptyString1)) {
//     console.log("Це рядок")
// } else if (emptyString1 === null) {
//     console.log("Це пустота")
// } else if (emptyString1 === false) {
//     console.log("Це не правда")
// } else if (emptyString1 === true) {
//     console.log("Це правда")
// } else if (typeof emptyString1 === 0) {
//     console.log("Це не визначене значення")
// };