const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  if (loginFormRef.elements.email.value === "" || loginFormRef.elements.password.value === "") {
    alert("Заповніть усі рядки");
    return;
  }
  const myFormData = new FormData(event.target);
  const dataObj = Object.fromEntries(myFormData);
  console.log(dataObj);
  loginFormRef.reset();
}

