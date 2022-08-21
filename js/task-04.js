const couterValueEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector("[data-action=decrement]");
const incrementBtnEl = document.querySelector("[data-action=increment]");

let couterValue = 0;

decrementBtnEl.addEventListener("click", () => {
  couterValue -= 1;
  couterValueEl.textContent = couterValue;
});

incrementBtnEl.addEventListener("click", () => {
  couterValue += 1;
  couterValueEl.textContent = couterValue;
});
