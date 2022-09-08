const grid = document.getElementById('grid');
const clear = document.getElementById('clear');
const val = document.getElementById('value');
const slider = document.getElementById('size');

createGrid(16)

slider.onmousemove = slider.onchange = function() {
  val.innerHTML = `Size:${slider.value}`
  del(slider.value)
}

let mouseDown = false;
document.onmousedown = function(){
  mouseDown = true;
}
document.onmouseup = function(){
  mouseDown = false;
}

clear.addEventListener("click", del);
function createGrid(size){
  for(var x = 0 ; x < size ; x++){
    let row = document.createElement('span');
    row.setAttribute("class","row");
    for(var y = 0 ; y < size ; y++){
      let cell = document.createElement('div');
      cell.setAttribute("class","cell")
      cell.setAttribute("id",(`${String(x)}x${String(y)}`))
      cell.addEventListener('mouseover', colorChange);
      cell.addEventListener('click', colorChange);
      row.append(cell);
    }
    grid.append(row)
  }
}
function colorChange(event){
    if (event.type == "mouseover" && !mouseDown ) return
    event.target.style.backgroundColor = "black";
}
function del(size){
  grid.innerHTML = '';
  createGrid(size)
}
