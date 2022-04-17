
function drawGrid() {
  const container = document.querySelector('#container');  for (let i = 0; i < 16; i++) {
    
    const row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    
        for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor)
    
        
        row.appendChild(square)
        }
     
    }
}

drawGrid()

function changeColor() {
            this.classList.add('hover');
        }




