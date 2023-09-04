function populateGrid(size = 16) {
  const container = document.querySelector(".container");
  const squares = document.querySelectorAll(".container > div");
  squares.forEach(div => div.remove());
  container.style.gridTemplateColumns = `repeat(${size}, auto)`;
  container.style.gridTemplateRows = `repeat(${size}, auto)`;
  let amt = size * size
  for (let i = 0; i < amt; i++){
    const div = document.createElement("div");
    container.appendChild(div);
    div.addEventListener("mouseover", () => div.style.backgroundColor = "red")
    };
  
  };

function changeSize() {
  let size = document.getElementById("size-input").value;
  if ((size > 2) && (size < 100)){
    populateGrid(size)
  }
  else{
    populateGrid(16);
  }
};


function keyEnter(e) {
  if (e.key === "Enter"){
  let size = e.target.value;
  if ((size > 2) && (size < 100)){
    populateGrid(size)
  }
  else{
    populateGrid(16);
  }
}};