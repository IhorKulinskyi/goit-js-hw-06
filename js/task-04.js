let counterValue = 0;

const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
// console.log(decrementBtnEl);

const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
// console.log(incrementBtnEl);

const counterValueEl = document.querySelector("#value");
// console.log(counterValueEl);

decrementBtnEl.addEventListener("click", () => {
  counterValue += -1;
  counterValueEl.textContent = counterValue;
});

incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
