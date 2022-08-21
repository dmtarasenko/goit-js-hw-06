const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", ({ currentTarget }) => {
  outputEl.textContent =
    currentTarget.value === "" ? "Anonymous" : currentTarget.value;
});
