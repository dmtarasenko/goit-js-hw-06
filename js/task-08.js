const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  email.value === "" || password.value === ""
    ? alert("Всі поля повинні бути заповнені")
    : console.log({ email: `${email.value}`, password: `${password.value}` });

  event.currentTarget.reset();
}
