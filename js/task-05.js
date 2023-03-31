const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const outputRef = document.querySelector("#name-output");
console.log(outputRef);

const DEFAULT_VALUE = outputRef.textContent;

inputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value === '') {
    outputRef.textContent = DEFAULT_VALUE;
  } else {
    outputRef.textContent = event.currentTarget.value;
  }
  
});
