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
  amount = inputValue.value;
  boxesDiv.replaceChildren();
  const elements = [];
  let boxSide = 20;

  for (let i = 0; i < amount; i += 1) {
    boxSide += 10;
    const newElement = document.createElement("div");
    newElement.classList.add("box");
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = `${boxSide}px`;
    newElement.style.height = `${boxSide}px`;
    newElement.style.marginBottom = "10px";
    newElement.classList.add("rotateIn");
    elements.push(newElement);
  }

  boxesDiv.append(...elements);
}

function destroyBoxes() {
  const boxes = boxesDiv.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.classList.add("box-destroy");
    setTimeout(() => box.remove(), 1000);
  });
  inputValue.value = "";
}
