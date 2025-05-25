const slideBar = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

const newSize = _.debounce(() => {
  const size = slideBar.value;
  img.style.width = size + 'px';
}, 300);

slideBar.addEventListener("input", newSize);