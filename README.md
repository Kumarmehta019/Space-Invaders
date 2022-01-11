### README progress... ![95%](https://progress-bar.dev/95)

# SEI Project One: Space Invaders 👾

## Table of Contents:

|  **No:**     | **Content** |
| -------- | ------- |
|    1    | **`Project Overview`**|
|    2     | **`Project Brief and Technical Requirements`**|
|    3    | **`Technologies Used`**|
|    4     | **`Project Timeline - 7 Days`**|
|    5     | **`Bugs`**|
|    6     | **`Wins and Challenges`**|
|    7     | **`Future Improvements`**|
|    8     | **`Key Learnings`**|


 ## 1. Project Overview
Space Invaders is a classic arcade game from the 80s. The player aims to shoot laser beams at the invading alien armada, before it reaches the planet's surface using a mounted gun turret. The player can only move left or right. The aliens also move from left to right, and also move down each time they reach the side of the screen. The aliens also periodically drop bombs towards the player.

I wanted to create a similar game but sought to modernise it by using better images for the spaceship, aliens and laser beams. The aim was to create the nostalgic feel for the game but with better graphics and music. 


![Space Invaders Title Screen!](https://user-images.githubusercontent.com/88886169/140651552-c1fc7c0c-1fc6-4638-b199-e25aaa1db8da.png)
![Space Invaders Game Play Screen!](https://user-images.githubusercontent.com/88886169/140651677-88acc158-1507-4d3f-a208-fbf38d7cc724.png)

#### Play the full game here: [*👾👾👾CLICK ME!👾👾👾*](https://kumarmehta019.github.io/Space-Invaders/)


### Resources:
> If you don't know what space invaders is, then the following links will help you understand the game better:
> 1. [Space Invaders 1978 - Arcade Gameplay - Youtube](https://www.youtube.com/watch?v=MU4psw3ccUI)
> 2. [Space Invaders - Wikipedia](https://en.wikipedia.org/wiki/Space_Invaders)


## 2. Project Brief and Technical Requirements

- Build a grid based game in the browser.
- The player should be able to clear at least one wave of aliens.
- The player's score should be displayed at the end of the game.
- Create a responsive design.
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles.
- Do not use HTML Canvas.

## 3. Technologies Used

- JavaScript.
- CSS with animation.
- HTML.
- Git.
- GitHub.
- Google Fonts.
- Figma- wireframe.


## 4. Project Timeline- 7 Days

### Day One:

The first day was spent planning the game by pseudo coding the MVP level. I then started creating the wireframe and mock up designs of the game using Figma. This was also the first time I was using Figma so I took some time to go through a few tutorials on how to use Figma. This was a great learning experience for me and I was able to create a rough design of how I wanted the game to look. Below are a few images of my Figma designs:

<img width="490" alt="Screenshot 2021-10-07 at 22 24 06" src="https://user-images.githubusercontent.com/88886169/140654792-c79806be-da82-4664-bdcc-a5294ed31e00.png">

<img width="490" alt="Screenshot 2021-10-07 at 22 24 21" src="https://user-images.githubusercontent.com/88886169/140654795-2e673988-7788-4cf8-93d6-328fd5671cee.png">

<img width="490" alt="Screenshot 2021-10-07 at 22 24 35" src="https://user-images.githubusercontent.com/88886169/140654799-e8e4c6a6-a4e6-4d94-83ec-35b0d7160068.png">

<img width="490" alt="Screenshot 2021-10-07 at 22 24 48" src="https://user-images.githubusercontent.com/88886169/140654803-af1a147d-df23-4b4d-b6bc-cada5a6967b4.png">

During the process of designing the game, I used the time to acquire images, sounds and fonts I wanted to use for the game. This was a real time saver, especially when the project moved closer to deadline day.

I spent the rest of the day creating the HTML, CSS and JavaScript shell for the game so that I could then move on to the JavaScript element and start creating the grid. The grid was created in JavaScript and each cell of the grid was given an 'id' which the majority of the code would then be based upon.

Below is a snippet of the code I created to first set up the grid variables and then create the grid:

<img width="379" alt="Screenshot 2021-11-07 at 17 27 56" src="https://user-images.githubusercontent.com/88886169/140655219-a0ccf98b-17c3-4614-a68a-90b7138cf53b.png">

<img width="379" alt="Screenshot 2021-11-07 at 17 28 42" src="https://user-images.githubusercontent.com/88886169/140655233-96975317-1a80-4a85-bce8-c48170df6686.png">


### Day Two and Three:

I spent the second and third day writing the logic for getting the aliens on the grid as well as the spaceship. Whilst getting a single spaceship on the grid wasn't hard, I was having difficulty adding different alien background images to each of the divs that were created in JavaScript. When I hit this roadblock, I had to go away and do some research on how to add the aliens to different positions. Through my research I was able to understand that I needed to create a variable with an array of starting positions for the aliens and then use a .forEach() method to place each individual alien into the cell's variable. Below is a snippet of the code that I used:

<img width="844" alt="Screenshot 2021-10-09 at 21 54 45" src="https://user-images.githubusercontent.com/88886169/140655812-86628711-c109-47a4-b279-7d9d61246a39.png">

<img width="844" alt="Screenshot 2021-10-09 at 21 55 51" src="https://user-images.githubusercontent.com/88886169/140655813-36e8d475-c673-4c97-bc54-a4e87a677f73.png">

<img width="1046" alt="Screenshot 2021-10-09 at 21 53 59" src="https://user-images.githubusercontent.com/88886169/140655841-ecf79378-ae5d-4624-a8cd-9a78f5ee161f.png">

I then spent the rest of the day writing a function to move the spaceship left and right along the grid using the keydown event listener. I didn't have much trouble coding this element of the game and was really pleased when I was able to see the spaceship move along the grid.


### Day Four and Five:

I spent day four and five trying to make the spaceship fire a laser beam and also make the aliens move along the grid and fall down once they reached the edge of the grid. This was the toughest part of the project. I was able to make the aliens move right and go down the grid but couldn't make the aliens move left after they went down once on the grid. I also couldn't target the blue of the green aliens to move with the pink aliens. It was at this point that I decided to simplify my code and I decided to not create different types of aliens and to just create one type of alien (pink one). I was of the view that I could always add the other type of aliens at a later time as a bonus feature. 

With the guidance of the course tutors and conversations with fellow students I was able to create a nested if and else statement which made the pink aliens move right, left and down. I was really pleased that I was able to make the aliens change direction when they went down a level, the game was coming along nicely. 

I spent the rest of the time amending my spaceship's movement function to excorporate a fire function to make the red laser beam move up the grid based on the current position of the spaceship. 

Below is the snippet of code for the alien movement and the spaceship movement and fire functions:

<img width="762" alt="Screenshot 2021-11-07 at 17 59 46" src="https://user-images.githubusercontent.com/88886169/140656257-96a1c1c3-68b6-43fe-bea1-068ff89818b5.png">

<img width="762" alt="Screenshot 2021-11-07 at 18 00 24" src="https://user-images.githubusercontent.com/88886169/140656278-a899f235-d1b9-498a-ab3b-1c383a9a2e8e.png">

### Day Six and Seven:

I spent day six and seven to add more functionality to my game and to work on my CSS and animation to make the game more user friendly and appealing. I was able to use set interval to make the laser beam from the spaceship move up towards the moving aliens and then write an if statement to detect if the red laser beams position in the cell on the grid also contained a pink alien, if it did then the pink alien and the red laser beam would be removed and an explosion sound would play (through the use of an alien hit function I wrote) and the quick addition and removal of an explosion image. Within the same code, I was able to update the score. 

I hit a brick wall trying to implement a random laser shooting out of the aliens on the bottom line of the alien group and with the time remaining being short I decided to spend the rest of my time adding CSS and animation to the game. I also spent time creating the different pages (introduction page, game win and game over pages) and implementing more sounds to the game.

Below is a screen recording of some of the features mentioned above:

https://user-images.githubusercontent.com/88886169/140653621-d287d96c-824b-4dbb-9ed7-62f66f16e938.mp4


## 5. Bugs

- On the final day I noticed that if you fire the laser beam too quickly (repetitively) then the explosion image where the laser beam is in the same cell as the pink alien remains in the cell and doesn't remove itself, furthermore any subsequent alien hits then also remain on the cells. I would need to do more research into why this bug is appearing and fix it. 
- Sometimes the second time you try to play the game another batch of aliens show up on the grid, but this isn't often. This may have something to do with how the game starts.

## 6. Wins and Challenges

### Wins:
- The biggest win for me is being able to proudly showcase this game, especially from a career changer who hasn't coded much using JavaScript. 
- The alien movement was a really big win for me, especially as I really struggled with this feature of the game. I am proud that I was able to not give up in the face of such a challenge and take regular breaks and also move on to doing other parts of the game and then come back to the problem with fresh ideas to tackle the problem.
- I was able to implement animation and music to the game which really made the game user friendly.

### Challenges:
- The alien movement was a big challenge for me, but I was able to get this to work and is one of the biggest achievements for me on this game.
- Getting random laser beams to fire from the aliens on the bottom row of the group of aliens was a real challenge.

## 7. Future Improvements

- Fix the bugs mentioned above.
- Make random laser beams fire from the bottom row of aliens.
- Add different types of aliens.
- Store the player's score in local storage to implement the `High Score` feature.
- Make the player lose lives when an alien laser beam hits the spaceship.
- Make a second wave of aliens after the first wave has been beaten by the player.

## 8. Key Learnings

- This project has helped me to solidify my understanding of JavaScript fundamentals.
- Knowing when to leave a problem and move to another section of the project, and then come back to it with a fresh pair of eyes.
- Learning how to use Figma to create basic frameworks/designs.
- Using console logs to debug parts of the code which don't work.
- Keeping the mindset to create a simple game and trying not to over-complicate things has helped me iron out small bugs and create a user-friendly fun game.



