function init() {

  //using a const variable called grid using the querySelector to locate the class called grid
  const grid = document.querySelector('.grid')

  //adding const variable called width to help create grid
  const width = 10

  //adding const variable called height to help create grid
  const height = 40

  //adding const variable called cellCount to help create grid 
  const cellCount = width * height

  // creating a const varaible with an empty array called cells for the individual cell (to be pushed into this array)
  const cells = []

  // creating a const variable to add the pinky alien class
  const pinkyClass = 'pinky'

  // creating a const variable to add all the pink alien positions on the grid
  const pPosition = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]

  // creating a const variable which shows the starting positions of the pink aliens
  const startingPinkyPosition = pPosition

  // creating a let variable to determine the current location of the pink aliens
  let currentPinkyPosition = 0

  // creating a const variable to add the bluey alien class
  const blueyClass = 'bluey'

  // creating a const variable to add all the blue alien positions on the grid
  const bPosition = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78]

  //creating a variable which shows the starting positions of the blue aliens 
  const startingBlueyPosition = bPosition

  // creating a let variable to determine the current location of the blue aliens
  let currentBlueyPosition 

  // creating a const variable to add the greeny alien class
  const greenyClass = 'greeny'

  //creating a const variable to add all the green alien positions on the grid
  const gPosition = [82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,  120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139]

  //creating a variable which shows the starting positions of the green aliens  
  const startingGreenyPosition = gPosition

  // creating a let variable to determine the current locations of the green aliens
  let currentGreenyPosition 

  // creating a const variable to add the spaceship one class
  const spaceshipClass = 'spaceshipone'

  // creating a const variable which shows the starting positions of the spaceship
  const spaceshipStartingPosition = 390

  // creating a let variable to determine the current location of the spaceship
  let currentSpaceshipPosition = 390

  // creating a const variable to add the red laser beam class
  const redLaserClass = 'rlb'

  // creating a const variable to determine the starting location of the red laser beam (rlb)
  const startingRlbPosition = currentSpaceshipPosition - 20

  // creating a const variable to determine the starting location of the red laser beam (rlb)
  let currentRlbPosition 

  // creating a const variable to add the pink laser beam class
  const pinkLaserClass = 'plb'

  // creating a let variable to determine the current location of the pink laser beam (plb)
  let currentPlbPosition 

  // creating a const variable to add the blue laser beam class
  const blueLaserClass = 'blb'

  // creating a let variable to determine the current location of the blue laser beam (blb)
  let currentBlbPosition 

  // creating a const variable to add the green laser beam class
  const greenLaserClass = 'glb'

  // creating a let variable to determine the current location of the green laser beam (glb)
  let currentGlbPosition = 0

  // creating a const variable to add the explosion one class
  const explosionClass = 'explosionone'

  // creating a let variable to determine the current location of the explosion
  let currentExplosionPosition = 0

  //adding const variable called cellWidth to help create function for moving keys 
  const cellWidth = 20

  // adding const variable for red laser beam location cell width
  const rlbCellWidth = 21

  // adding three life wrapper with document Queryselector all
  
  // const livesWrapper = document.querySelectorAll('.three-life')

  // console.log(livesWrapper)






  // creating a function called createGrid to make the grids based on the width, height and cellCount variables declared above. Then using the individual cell created and creating div and then giving each div an inner text to help with index numbering and finally adding the cell divs to the already existing grid class and pushing each cell into the empty cells array (declared above)
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.innerText = i 
      grid.appendChild(cell)
      cells.push(cell)
    }
    addSpaceship(spaceshipStartingPosition)
  }

  // creating a function to add the pink aliens to the divs called cells, using the forEach method to go through each of the pink alien positions and add the pinky class to the cells variable
  function addPinky() {
    pPosition.forEach((pink) => {
      cells[pink].classList.add(pinkyClass)
    })
  }

  // creating a function to add the blue aliens to the divs called cells, using the forEach method to go through each of the blue alien positions and add the bluey class to the cells variable
  function addBluey() {
    bPosition.forEach((blue) => {
      cells[blue].classList.add(blueyClass)
    })
  }

  // creating a function to add the blue aliens to the divs called cells, using the forEach method to go through each of the blue alien positions and add the bluey class to the cells variable

  function addGreeny() {
    gPosition.forEach((green) => {
      cells[green].classList.add(greenyClass)
    })
  }

  // creating a function to add the spaceship to the starting position (spaceshipStartingPosition)

  function addSpaceship(position) {
    cells[position].classList.add(spaceshipClass)
  }

  // creating a function to add red leaser beam (rlb)
  function addRlb(position) {
    cells[position].classList.add(redLaserClass)
  }

  // creating a function to add pink leaser beam (plb)

  function addPlb(position) {
    cells[position].classList.add(pinkLaserClass)
  }

  // creating a function to add blue leaser beam (blb)

  function addBlb(position) {
    cells[position].classList.add(blueLaserClass)
  }

  // creating a function to add green leaser beam (glb)

  function addGlb(position) {
    cells[position].classList.add(greenLaserClass)
  }


  // creating a function to add explosion (explosion)
  
  function addExplosion(position) {
    cells[position].classList.add(explosionClass)
  }


  // creating a function to remove red leaser beam (rlb)
  function removeRlb(position) {
    cells[position].classList.remove(redLaserClass)
  }

  // creating a function to remove pink leaser beam (plb)

  function removePlb(postion) {
    cells[position].classList.remove(pinkLaserClass)
  }

  // creating a function to remove blue leaser beam (blb)

  function removeBlb(position) {
    cells[position].classList.remove(blueLaserClass)
  }

  // creating a function to remove green leaser beam (glb)

  function removeGlb(position) {
    cells[position].classList.remove(greenLaserClass)
  }


  // creating a function to remove explosion (explosion)
  
  function removeExplosion(position) {
    cells[position].classList.remove(explosionClass)
  }

  // creating a function to remove spaceship (spaceshipone)
  
  function removeSpaceship(position) {
    cells[position].classList.remove(spaceshipClass)
  }

  // creating function to move the spaceship left and right, setting left and right boundaries and fire the red laserbeam
  
  function leftRightAndFire(event) {
    const key = event.keyCode
    removeSpaceship(currentSpaceshipPosition)   
    if (key === 39 && currentSpaceshipPosition % cellWidth !== cellWidth - 1) {
      console.log('right')
      currentSpaceshipPosition++
    } 
    if (key === 37 && currentSpaceshipPosition % cellWidth !== 0) {
      console.log('left')
      currentSpaceshipPosition--
    } 
    if (key === 32 ) {//try adding && with the left and right if above as an || to see if it works) { // && (cells[startingRlbPosition].classList.includes(redLaserClass) !== true)) {
      console.log('fire')
      addRlb(startingRlbPosition)
    } addSpaceship(currentSpaceshipPosition)
  }


  
  // removeRlb(currentRlbPosition)


  // creating a function to remove pink alien (pinkyClass)

  // function removeSpaceship(position) {
  //   cells[position].classList.remove(spaceshipClass)
  // }

  // creating a function to remove blue alien (blueyClass)



  // creating a function to remove green alien (greenyClass)








  //  when space bar is pressed the fire() function should trigger and the rlb position should be currentspaceshipposition minus 20.


  // adding explosion sound function 






  //collision function where alien laser hits spaceship
  // function alienLaserHitsSpaceship(position) {
  //   if ((cells[currentSpaceshipPosition].classList.includes(spaceshipClass) && cells[currentSpaceshipPosition].classList.includes(pinkLaserClass)) || ((cells[currentSpaceshipPosition].classList.includes(spaceshipClass) && cells[currentSpaceshipPosition].classList.includes(blueLaserClass))) || ((cells[currentSpaceshipPosition].classList.includes(spaceshipClass) && cells[currentSpaceshipPosition].classList.includes(greenLaserClass)))) {
  //     let currentExplosionPosition = currentSpaceshipPosition
  //     removeSpaceship(currentSpaceshipPosition)
  //     removePlb(currentSpaceshipPosition)
  //     removeBlb(currentSpaceshipPosition)
  //     removeGlb(currentSpaceshipPosition)
  //     addExplosion(currentSpaceshipPosition)
  //   }
  //   setTimeout (() => {
  //     removeExplosion(currentExplosionPosition)
  //   }, 2000)
  // }
  // try without cells and try contains instead of include.
    















  createGrid()
  addPinky()
  addBluey()
  addGreeny()
  // alienLaserHitsSpaceship(390)
  
  // addRlb(363)
  addPlb(360)
  addBlb(169)
  addGlb(217)
  // addExplosion()
  // removeRlb()
  // removePlb()
  // removeBlb()
  // removeGlb()
  // removeExplosion()
  // removeSpaceship()
  window.addEventListener('keydown', leftRightAndFire)



























}

document.addEventListener('DOMContentLoaded', init)