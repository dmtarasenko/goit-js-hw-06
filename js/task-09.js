function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const currentColorEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", onClickChangeColorBtn);

function onClickChangeColorBtn() {
  const color = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = color;
  currentColorEl.textContent = color;
}
