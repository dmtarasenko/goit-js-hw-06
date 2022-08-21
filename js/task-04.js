const couterValue = document.querySelector("#value");
const decValue = document.querySelector("[data-action=decrement]");
const incValue = document.querySelector("[data-action=increment]");

couterValue.textContent = 0;

decValue.addEventListener("click", () => {
  couterValue.textContent--;
});

incValue.addEventListener("click", () => {
  couterValue.textContent++;
});
