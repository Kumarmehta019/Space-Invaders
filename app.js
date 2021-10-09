function init() {

  //creating Grid for the game & starting positions of the three aliens

  //using query selector to add grid variable
  const grid = document.querySelector('.grid')

  //adding width variable to help create grid
  const width = 10

  //adding height variable to help create grid
  const height = 40

  //adding cellCount variable to help create grid 
  const cellCount = width * height

  // creating an empty array of cells for the individual cell (to be pushed into this array)
  const cells = []

  // creating a variable to add all the pink alien positions on the grid
  const pPosition = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]

  // creating a variable which shows the starting positions of the pink aliens
  const startingPinkyPosition = pPosition

  // creating a variable to add all the blue alien positions on the grid
  const bPosition = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]

  //creating a variable which shows the starting positions of the blue aliens 
  const startingBlueyPosition = bPosition

  //creating a variable to add all the green alien positions on the grid
  const gPosition = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139]

  //creating a variable which shows the starting positions of the green aliens  
  const startingGreenyPosition = gPosition

  // creating a variable which shows the starting positions of the spaceship
  const spaceshipStartingPosition = 390


  // creating a variable to determine the current locations of the pink aliens
  let currentPinkyPosition = []
  let currentBlueyPosition = []
  let currentGreenyPosition = []
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
    // addPinky()
    addBluey([20])
    addGreeny([40])
    addSpaceship([214])
  }
  
  function addPinky() {
    pPosition.forEach((pink) => {
      cells[pink].classList.add(pinkyClass)
    })

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
  addPinky()





























































}

document.addEventListener('DOMContentLoaded', init)