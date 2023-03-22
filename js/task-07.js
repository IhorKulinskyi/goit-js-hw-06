const rangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
console.log(textRef);

rangeRef.addEventListener("input", spanTextSizeChange);

function spanTextSizeChange(event) {
  textRef.style.fontSize = event.currentTarget.value + "px";
}
