const liItemRef = document.querySelectorAll("li.item");
console.log(`number of categories: ${liItemRef.length}`);

liItemRef.forEach((liItem) => {
  console.log(`category : ${liItem.firstElementChild.textContent}`);
  console.log(`elements : ${liItem.lastElementChild.children.length}`);
});
