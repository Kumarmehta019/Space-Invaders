function init() {

// creating Grid for the game & starting positions of the three aliens//

  const grid = document.querySelector('.grid')
  const width = 11
  const height = 20
  const cellCount = width * height
  const cells = []

  
  const startingPinkyPosition = 0 
  const startingBlueyPosition = 22
  const startingGreenyPosition = 44
  let currentPinkyPosition = 0
  let currentBlueyPosition = 0
  let currentGreenyPosition = 0
  const spaceshipStartingPosition = 214
  let currentSpaceshipPosition = 0
  const pinkyClass = 'pinky'
  const blueyClass = 'bluey'
  const greenyClass = 'greeny'
  const spaceshipClass = 'spaceship'

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i 
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPinky(0)
    addBluey([22])
    addGreeny([44])
    addSpaceship([214])
  }
  
  console.log()
  function addPinky(position) {
    cells[position].classList.add(pinkyClass)
  }
  function addBluey(position) {
    cells[position].classList.add(blueyClass)
  }
  function addGreeny(position) {
    cells[position].classList.add(greenyClass)
  }
  function addSpaceship(position) {
    cells[position].classList.add(spaceshipClass)
  }

  createGrid()






























































}

document.addEventListener('DOMContentLoaded', init)