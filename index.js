function populateGrid(size = 16) {
const container = document.querySelector(".container");
container.style.gridTemplateColumns = `repeat(${size}, auto)`;
container.style.gridTemplateRows = `repeat(${size}, auto)`;
let amt = size * size
for (let i = 0; i < amt; i++){
  const div = document.createElement("div");
  container.appendChild(div)
}};


let size = parseInt(window.prompt("input size"));

if ((size > 2) && (size < 100)){
 populateGrid(size)
}
else{
  populateGrid();
};
