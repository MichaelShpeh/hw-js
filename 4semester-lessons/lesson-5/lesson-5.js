const keys = ["1", "f", "c", "a", "t", "7", "m", "j", "l", "-"]; //!масив клавіш які потрібно натиснути

let currentKeyIndex = 0; //! поточний індекс

//! знаходимо елементи
const status = document.getElementById('status');
const key = document.getElementById("key");
const gameButton = document.getElementById("game-button");

//! функція втановлює клавішу на мімсце "Тут повинна з'явитися клавіша"
const loadsKey = function () {
    key.textContent = keys[currentKeyIndex];
};
//! перемішує клавіші
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
 
//! функція розпочнає гру
const startsGame = function () {
    shuffle(keys);
    currentKeyIndex = 0;
    loadsKey();
}

gameButton.addEventListener("click", startsGame);

//! додавання сдухача з перевірками, закінчення гри та початок нової
document.addEventListener("keydown", function (event) {
    const pressedButton = event.key.toLowerCase();
    
    if (pressedButton === keys[currentKeyIndex].toLowerCase()) {
      currentKeyIndex += 1;
      if (currentKeyIndex == keys.length) {
        PNotify.success({
          text: "Гра закінчена",
          delay: 1000,
        });
      } else {
        loadsKey();
      }
    } else {
      PNotify.error({
        text: "Отакої, натиснута клавіша неправильна",
        delay: 1000,
      });
    }
});

document.addEventListener("keypress", function (event) {
  event.preventDefault();
});