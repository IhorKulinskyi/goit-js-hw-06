function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const inputValue = document.querySelector("input");
const boxesDiv = document.querySelector("#boxes");

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const elements = [];
  let boxSide = 20;
  amount = inputValue.value;
  for (let i = 0; i < amount; i += 1) {
    boxSide += 10;
    const newElement = document.createElement("div");
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = `${boxSide}px`;
    newElement.style.height = `${boxSide}px`;
    newElement.style.marginBottom = "10px";
    elements.push(newElement);
  }

  boxesDiv.append(...elements);
}

function destroyBoxes() {
  boxesDiv.replaceChildren();
}
