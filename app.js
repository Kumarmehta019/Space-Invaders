function init() {

  //Score & High Score variable
  const score = document.getElementById('score-numbers')
  const highScore = document.getElementById('high-score-numbers')
  const scoreGameEndLost = document.getElementById('scored-numbers1')
  const scoreGameEndWin = document.getElementById('scored-numbers2')
  let playerScore = 0

  // kills variable
  const alienKills = document.getElementById('kills-numbers')
  let killingTotal = 0

  // adding three life wrapper with document Queryselector all & lives counter
  const playerLifeOne = document.querySelector('.three-life1')
  const playerLifeTwo = document.querySelector('.three-life2')
  const playerLifeThree = document.querySelector('.three-life3')
  let lives = 3


  // Game Over & removing Intro page and Game
  const youLost = document.querySelector('.losing-game-over-wrapper')
  const youWin = document.querySelector('.winning-game-over-wrapper')
  const removeIntro = document.querySelector('.game-intro-wrapper')
  const removeGame = document.querySelector('.main-game-wrapper')
  const startGameBtn = document.getElementById('startbtn')
  const losingRestartGameBtn = document.getElementById('restartbtn1')
  const winningRestartGameBtn = document.getElementById('restartbtn2')

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
  const cellsLength = 381
  // Pink Alien Variables

  const pinkAlienClass = 'pinky'

  const pinkAlienStartingPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48,49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98]

  let pinkAlienCurrentPosition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98]

  let deadPinkAliens = []

  // Alien movement variables
  let direction = 'right'
  let moveAliensInterval

  // creating spaceship variables
  const spaceshipClass = 'spaceshipone'
  const spaceshipStartingPosition = 390
  let currentSpaceshipPosition = 390
  let deadSpaceships = []

  // creating red laser beam variables
  const redLaserClass = 'rlb'
  let currentRlbPosition = 0

  // creating variable for green laser beam
  const greenLaserClass = 'glb'
  let currentGlbPosition = 0

  //creating variables for explosion
  const explosionClass = 'explosionone'
  let currentExplosionPosition = 0

  // Function to create grid and add spaceship and pink aliens

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.innerText = i 
      grid.appendChild(cell) 
      cells.push(cell)
    }
    // addSpaceship(spaceshipStartingPosition)
    // addPinkStarting()
    // moveAliens()
  }

  // function to add pink alien to starting position on grid
  function addPinkStarting() {
    pinkAlienStartingPositions.forEach((pink) => {
      if (pink !== deadPinkAliens) {
        cells[pink].classList.add(pinkAlienClass)
      } 
    })    
  } 

  // function to add pink aliens to current position on grid
  function addPinkCurrent() {
    pinkAlienCurrentPosition.forEach((pink) => {
      if (pink !== deadPinkAliens) {
        cells[pink].classList.add(pinkAlienClass)
      } 
    })    
  }
  console.log(pinkAlienCurrentPosition !== deadPinkAliens)
  // creating a function to add the spaceship to the starting position (spaceshipStartingPosition)

  function addSpaceship(position) {
    cells[position].classList.add(spaceshipClass)
  }

  // creating a function to add red laser beam (rlb)
  function addRlb(position) {
    cells[position].classList.add(redLaserClass)
  }

  // creating a function to remove red laser beam (rlb)
  function removeRlb(position) {
    cells[position].classList.remove(redLaserClass)
  }

  // creating a function to add green leaser beam (glb)

  function addGlb(position) {
    cells[position].classList.add(greenLaserClass)
  }

  // creating a function to remove green leaser beam (glb)

  function removeGlb(position) {
    cells[position].classList.remove(greenLaserClass)
  }

  // creating a function to add explosion (explosion)
  
  function addExplosion(position) {
    cells[position].classList.add(explosionClass)
  }

  // creating a function to remove explosion (explosion)
  
  function removeExplosion(position) {
    cells[position].classList.remove(explosionClass)
  }

  // creating a function to remove spaceship (spaceshipone)

  function removeSpaceship(position) {
    cells[position].classList.remove(spaceshipClass)
  }

  // function for Removing pink aliens
  function removePink() {
    pinkAlienCurrentPosition.forEach((pink) => {
      cells[pink].classList.remove(pinkAlienClass)
    })
  }

  // function to remove one pink alien
  function removeOnePink(position) {
    cells[position].classList.remove(pinkAlienClass)
  }


  function moveAliens() {
    
    moveAliensInterval = setInterval(() => {
      const leftWall = pinkAlienCurrentPosition.some((pink) => {
        return pink % width === 0
      }) 
      const rightWall = pinkAlienCurrentPosition.some((pink) => {
        return pink % width === width - 1
      })
      const bottomline = pinkAlienCurrentPosition.some((pink) => {
        return pink === cellsLength
      }) 
      if (bottomline === true) {
        gameOverLost()
      } else if (direction === 'right') {
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
    }, 1500)
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
      if (cells[currentRlbPosition].classList.contains(pinkAlienClass)) { 
        cells[currentRlbPosition].classList.remove(redLaserClass)
        cells[currentRlbPosition].classList.remove(pinkAlienClass)
        const removedPinkAlien = pinkAlienCurrentPosition.indexOf(currentRlbPosition)
        pinkAlienCurrentPosition.splice(removedPinkAlien, 1)
        clearInterval(moveRlbInterval)
        addExplosion(currentRlbPosition)
        alienHit()
        playerScore += 100
        score.innerText = playerScore
        scoreGameEndLost.innerText = playerScore
        scoreGameEndWin.innerText = playerScore
        highScore.innerText = playerScore
        setTimeout(() => { 
          removeExplosion(currentRlbPosition)
        }, 60)
        deadPinkAliens.push(removedPinkAlien)
        killingTotal += 1
        alienKills.innerText = killingTotal
      } 
      if (deadPinkAliens.length === 90) {
        clearInterval(moveRlbInterval)
        gameOverWin()
      }
    }, 20)   
  }
  
  // let moveGlbInterval

  // function to move green laser beams from alien

  // function moveGlb() {
  //   moveGlbInterval = setInterval(() => {
  //     if (currentGlbPosition > 400) {
  //       clearInterval(moveGlbInterval)
  //       removeGlb(currentGlbPosition)
  //     }
  //     removeGlb(currentGlbPosition)
  //     currentGlbPosition += width
  //     addGlb(currentGlbPosition)
  //     if (cells[currentGlbPosition].classList.contains(spaceshipClass)) { 
  //       cells[currentGlbPosition].classList.remove(greenLaserClass)
  //       cells[currentGlbPosition].classList.remove(spaceshipClass)
  //       const removedSpaceship = currentSpaceshipPosition.indexOf(currentGlbPosition)
  //       clearInterval(moveGlbInterval) 
  //       addExplosion(currentGlbPosition)
  //       spaceshipDestroyed()
  //       lives -= 1
  //       setTimeout(() => { 
  //         removeExplosion(currentGlbPosition)
  //         addSpaceship(spaceshipStartingPosition)
  //       }, 60)
  //       deadSpaceships.push(removedSpaceship)
  //       removeLife()
  //     } 
  //   }, 20)    
  // }

  // function to remove life
  // function removeLife() {
  //   if (lives === 2) {
  //     playerLifeThree.style.display = 'none'
  //   } else if (lives === 1) {
  //     playerLifeTwo.style.display = 'none'
  //   } else if (lives === 0) {
  //     playerLifeOne.style.display = 'none'
  //     gameOverLost() 
  //   }
  // }

  // function to start game
  function startGame() {
    removeIntro.style.display = 'none'
    removeGame.style.display = 'flex'
    setTimeout(() => { 
      addSpaceship(spaceshipStartingPosition)
      addPinkStarting()
      moveAliens()
    }, 1500)
  }

  // function for game over lost
  function gameOverLost() {
    clearInterval(moveAliensInterval)
    removeGame.style.display = 'none'
    youLost.style.display = 'flex'
    gameOverLostMusic()
  }

  // function for game over win 
  function gameOverWin() {
    clearInterval(moveAliensInterval)
    removeGame.style.display = 'none'
    youWin.style.display = 'flex'
    // gameOverWinMusic()
  }


  // function to restart game on losing
  function restartGameLosing() {
    youLost.style.display = 'none'
    removeGame.style.display = ''
    window.location.reload()
  }


  // function to restaart game on winning
  function restartGameWinning() {
    youWin.style.display = 'none'
    removeGame.style.display = ''
    window.location.reload()
  }


  //creating function for the fire sound of the red laser beam

  function rlbFire() {
    fire.src = 'Sounds/Laser.mp3'
    fire.play()
  }

  // creating function for the alien hit sound
  function alienHit() {
    hit.src = 'Sounds/hit.mp3'
    hit.play()
  }

  // creating function for Spaceship Destroyed sound
  function spaceshipDestroyed() {
    destroyed.src = 'Sounds/destroyed.mp3'
    destroyed.play()
  }

  // creating function for life sound
  function lifeLost() {
    life.src = 'Sounds/life.mp3'
    life.play()
  }


  // creating function for game over lost sound
  function gameOverLostMusic() {
    lost.src = 'Sounds/lost.mp3'
    lost.play()
  }


  // // creating function for game over win sound
  // function gameOverWinMusic() {
  //   win.src = 'Sounds/Win.mp3'
  //   win.play()  
  // }



  createGrid()


  window.addEventListener('keydown', leftRightAndFire)
  startGameBtn.addEventListener('click', startGame)
  losingRestartGameBtn.addEventListener('click', restartGameLosing)
  winningRestartGameBtn.addEventListener('click', restartGameWinning)

























}

document.addEventListener('DOMContentLoaded', init)