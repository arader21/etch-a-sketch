function makeGrids(size) {
  let screen = document.querySelector(".sketch-screen");
   let squares = screen.querySelectorAll("div")
  squares.forEach((div) => div.remove());
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
        row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "black";
  });
      row.classList.add("row");
      column.appendChild(row);
    }
    screen.appendChild(column);
  }
}
makeGrids(16);

// let divHover = document.querySelector("div");
  //divHover.addEventListener("mouseover", () => {
    //divHover.style.backgroundColor = "red";
  //})
  //divHover.addEventListener("mouseout", () => {
    //divHover.style.backgroundColor = "";
 // })
function changeSize(input) {
  if (input >= 2 && input <= 100){
  makeGrids(input);
  }
  else {
    console.log("error")    
}
}