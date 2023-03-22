const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = ingredient;
  return liRef;
});

listEl.append(...elements);
