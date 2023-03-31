function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
const currentColor = document.querySelector(".color");
changeColorBtn.addEventListener("click", changeBodyColor);
function changeBodyColor(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = bodyRef.style.backgroundColor;
}
