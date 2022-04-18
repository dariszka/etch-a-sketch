 
let numberOfSquares = getNumberOfSquares()

let grid = drawGrid()

let restartButton = clickRestartButton()



function getNumberOfSquares() {
    let inputNumber = prompt ('big??');

    if (inputNumber < 101) {
        return inputNumber;
    } else {
        for (let i = 0; i < 5; i++) {
            let inputNumberAgain =  prompt('cool now type a number up to a 100')          
            if (inputNumberAgain < 101) {
                return inputNumberAgain;
            } else {
                i++
            }
        }
        alert('man fuck off')
    }
}

function drawGrid() {
  const container = document.querySelector('#container');  
  for (let i = 0; i < numberOfSquares; i++) {
    
    const row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    
        for (let i = 0; i < numberOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        square.addEventListener('mouseover', changeColor)
    
        row.appendChild(square)
        }
     
    }
}

function changeColor() {
    this.classList.add('hover');
}

function clickRestartButton() {
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', () => window.location.reload())
}

