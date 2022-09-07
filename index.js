
const grid = document.getElementById('grid');

let mouseDown = false;
document.onmousedown = function(){
  console.log("g")
  mouseDown = true;
}
document.onmouseup = function(){
  mouseDown = false;
}

for(var x = 0 ; x < 16 ; x++){
  let row = document.createElement('span');
  row.setAttribute("class","row");
  for(var y = 0 ; y < 16 ; y++){
    let cell = document.createElement('div');
    cell.setAttribute("class","cell")
    cell.setAttribute("id",(`${String(x)}x${String(y)}`))
    cell.addEventListener('mouseover', colorChange);
    cell.addEventListener('click', colorChange);
    row.append(cell);
  }
  grid.append(row)
}

function colorChange(event){
    if (event.type == "mouseover" && !mouseDown ) return
    event.target.style.backgroundColor = "black";
}
