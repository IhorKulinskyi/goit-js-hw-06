const liItemRef = document.querySelectorAll("li.item");
console.log(`number of categories: ${liItemRef.length}`);

liItemRef.forEach((liItem) => {
  console.log(`category : ${liItem.querySelector("h2").textContent}`);
  console.log(`elements : ${liItem.querySelectorAll("li").length}`);
});
