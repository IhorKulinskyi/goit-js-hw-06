const inputRef = document.querySelector("#validation-input");
const inputLength = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", onInputLengthValidation);

function onInputLengthValidation(event) {
  event.currentTarget.className = "";
  event.currentTarget.value.length === inputLength
    ? event.currentTarget.classList.add("valid")
    : event.currentTarget.classList.add("invalid");
}
