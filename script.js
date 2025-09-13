function makeGrids(size) {
  let screen = document.querySelector(".sketch-screen");
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.style.border = "2px solid black";
      row.innerText = (i * size) + j;
      column.appendChild(row);
    }
    screen.appendChild(column);
  }
}
makeGrids(16);
//const sketchscreen = docutment.getElementById('.sketch-screen');
//('.sketch-screen').addEventListener('mouseover', () => {
 // myElement.style.backgroundColor = "blue"});
 // {myElement.style.backgroundColor = ""});
 let divHover = document.querySelector("div");
  divHover.addEventListener("mouseover", () => {
    divHover.style.backgroundColor = "red";
  })
  divHover.addEventListener("mouseout", () => {
    divHover.style.backgroundColor = "";
  })
