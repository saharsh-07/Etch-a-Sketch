let globalColor = "black";
let click = true

function getRainbow() {
  const rainbowArr = [
    "violet",
    "blue",
    "indigo",
    "green",
    "yellow",
    "orange",
    "red",
  ];
  return rainbowArr[Math.floor(Math.random() * rainbowArr.length)];
}

const getRandom = () =>
  `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${
    Math.random() * 100
  }%)`;

function changeColor(choice) {
  globalColor = choice;
}

function populateGrid(size = 16) {
  const container = document.querySelector(".container");
  const squares = document.querySelectorAll(".container > div");
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size}, auto)`;
  container.style.gridTemplateRows = `repeat(${size}, auto)`;
  let amt = size * size;
  for (let i = 0; i < amt; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.addEventListener("mouseover", colorHover);
  }
}

function colorHover() {
  if (click)
  {if (globalColor === "white") {
    this.style.backgroundColor = "white";
  } else if (globalColor === "black") {
    this.style.backgroundColor = "black";
  } else if (globalColor === "random") {
    this.style.backgroundColor = getRandom();
  } else if (globalColor === "rainbow") {
    this.style.backgroundColor = getRainbow();
  }}
}

const isClicked = () => {
  click = !click;
  const mode = document.getElementById("mode");
  if (click){
    mode.textContent = "Coloring activated"
  }
  else{
    mode.textContent = "Coloring off"
  }
}

document.querySelector(".container").addEventListener("click", isClicked)
function reset() {
  populateGrid(16);
  document.getElementById("size-input").value = 16;
  globalColor = "white"
}
function changeSize() {
  let size = document.getElementById("size-input").value;
  if (size > 2 && size < 100) {
    populateGrid(size);
  } else {
    populateGrid(16);
  }
}

function keyEnter(e) {
  if (e.key === "Enter") {
    let size = e.target.value;
    if (size > 2 && size < 100) {
      populateGrid(size);
    } else {
      populateGrid(16);
    }
  }
}

populateGrid(16);
