const inputEL = document.querySelector("#validation-input");

inputEL.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length >= inputEL.dataset.length) {
    inputEL.classList.add("valid");
    inputEL.classList.remove("invalid");
  } else {
    inputEL.classList.add("invalid");
    inputEL.classList.remove("valid");
  }
});
