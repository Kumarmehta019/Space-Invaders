function init() {

  // audio variables
  const fire = document.querySelector('.fire')
  const hit = document.querySelector('.hit')
  const destroyed = document.querySelector('.destroyed')
  const life = document.querySelector('.life')
  const lost = document.querySelector('.lost')
  const win = document.querySelector('.win')
  
  

  // Grid Variables
  const grid = document.querySelector('.grid')

  const width = 20

  const cellCount = width * width

  const cells = []

  // Pink Alien Variables

  const pinkAlienClass = 'pinky'

  const pinkAlienStartingPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48,49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98]

  let pinkAlienCurrentPosition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48,49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98]


  // Alien movement variables
  let direction = 'right'
  let moveAliensInterval

  // creating spaceship variables
  const spaceshipClass = 'spaceshipone'
  const spaceshipStartingPosition = 390
  let currentSpaceshipPosition = 390

  // crating red laser beam variables
  const redLaserClass = 'rlb'
  let currentRlbPosition = 0

  // Function to create grid and add spaceship and pink aliens

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.innerText = i 
      grid.appendChild(cell)
      cells.push(cell)
    }
    addSpaceship(spaceshipStartingPosition)
    addPinkStarting()
    moveAliens()
  }

  // function to add pink alien to starting position on grid
  function addPinkStarting() {
    pinkAlienStartingPositions.forEach((pink) => {
      cells[pink].classList.add(pinkAlienClass)
    })
  }

  // function to add pink aliens to current position on grid
  function addPinkCurrent() {
    pinkAlienCurrentPosition.forEach((pink) => {
      cells[pink].classList.add(pinkAlienClass)
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

  // creating a function to remove red leaser beam (rlb)
  function removeRlb(position) {
    cells[position].classList.remove(redLaserClass)
  }

  // creating a function to remove spaceship (spaceshipone)

  function removeSpaceship(position) {
    cells[position].classList.remove(spaceshipClass)
  }

  // function for Removing pink alien
  function removePink() {
    pinkAlienCurrentPosition.forEach((pink) => {
      cells[pink].classList.remove(pinkAlienClass)
    })
  }

  function moveAliens() {
    
    moveAliensInterval = setInterval(() => {
      console.log(pinkAlienCurrentPosition)
      const leftWall = pinkAlienCurrentPosition.some((pink) => {
        return pink % width === 0
      }) 
      const rightWall = pinkAlienCurrentPosition.some((pink) => {
        return pink % width === width - 1
      })
      if (direction === 'right') {
        if (rightWall) {
          removePink()
          pinkAlienCurrentPosition = pinkAlienCurrentPosition.map((pinkAlien) => {
            return pinkAlien = pinkAlien + width
          })
          direction = 'left'
          addPinkCurrent()
          return
        } else {
          removePink()
          pinkAlienCurrentPosition = pinkAlienCurrentPosition.map((pinkAlien) => {
            return pinkAlien = pinkAlien + 1
          })
          addPinkCurrent()
        }
      } else if (direction === 'left') {
        if (leftWall) {
          removePink()
          pinkAlienCurrentPosition = pinkAlienCurrentPosition.map((pinkAlien) => {
            return pinkAlien = pinkAlien + width
          })
          direction = 'right'
          addPinkCurrent()
        } else {
          removePink()
          pinkAlienCurrentPosition = pinkAlienCurrentPosition.map((pinkAlien) => {
            return pinkAlien = pinkAlien - 1
          })
          addPinkCurrent()
        }
      }
    }, 1000)
  }




  // creating function to move the spaceship left and right, setting left and right boundaries and fire the red laserbeam
  
  function leftRightAndFire(event) {
    const key = event.keyCode
    removeSpaceship(currentSpaceshipPosition)   
    if (key === 39 && currentSpaceshipPosition % width !== width - 1) {
      console.log('right')
      currentSpaceshipPosition++
    } 
    if (key === 37 && currentSpaceshipPosition % width !== 0) {
      console.log('left')
      currentSpaceshipPosition--
    } 
    if (key === 32 ) {
      console.log('fire')
      rlbFire()
      addRlb(currentSpaceshipPosition - 20)
      currentRlbPosition = currentSpaceshipPosition - 20
      moveRlb()
    } addSpaceship(currentSpaceshipPosition)
  } 

  // creating function to move red laser beam up the grid every second using set interval 

  let moveRlbInterval

  function moveRlb() {
    moveRlbInterval = setInterval(() => {
      if (currentRlbPosition < 0) {
        clearInterval(moveRlbInterval)
        removeRlb(currentRlbPosition)
      }
      removeRlb(currentRlbPosition)
      currentRlbPosition -= width
      addRlb(currentRlbPosition)
    }, 20)
  }


  //creating function for the fire sound of the red laser beam

  function rlbFire() {
    fire.src = 'Sounds/Laser.mp3'
    fire.play()
  }

  // creating function for the alien hit sound
  function alienHit() {
    fire.src = 'Sounds/hit.mp3'
    fire.play()
  }

  // creating function for Spaceship Destroyed sound
  function spaceshipDestroyed() {
    fire.src = 'Sounds/destroyed.mp3'
    fire.play()
  }

  // creating function for life sound
  function lifeLost() {
    fire.src = 'Sounds/life.mp3'
    fire.play()
  }


  // creating function for game over lost sound
  function gameOverLost() {
    fire.src = 'Sounds/lost.mp3'
    fire.play()
  }


  // creating function for game over win sound
  function gameOverWin() {
    fire.src = 'Sounds/win.mp3'
    fire.play()
  }



  createGrid()
  

  window.addEventListener('keydown', leftRightAndFire)



























}

document.addEventListener('DOMContentLoaded', init)