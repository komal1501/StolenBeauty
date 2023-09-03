# Stolen Beauty
<p align="center">
    <img src="https://user-images.githubusercontent.com/79582204/236816839-e36ef675-f81b-48c5-8065-6d2e32781256.jpg" alt="" width=1000>
<br><br>
    A unique and engaging website that combines the excitement of a game with the benefits of a psychological evaluation to deliver a truly memorable and insightful soft skills assessment. The Stolen Beauty offers an immersive and thrilling experience with an array of challenging puzzles, intriguing clues, captivating stories, and Soft Skills analysis to keep you engaged and entertained.
</p>

# Features

The following features are included in the project:

## Authentication

- [x] User Sign Up
- [x] User Log In
- [x] Admin Login

## Authorization

Users once logged in can
- [x] Play the Game
- [x] Access Result Analysis
- [x] Only admin can access the Admin Panel

## Game Feature

- [x] 5 Levels of Game
    1. The Torn Note
    2. Mystery of Floors
    3. Game of Numbers
    4. The Illusionary Indicator
    5. The Last Game
    
- [x] 5 Soft Skills Analyzed
    1. Attention to Detail
    2. Creative Thinking
    3. Logical Reasoning
    4. Deductive Reasoning
    5. Spatial Reasoning
    
- [x] 2 dead ends
    1. On stage 1: The Torn Note
    2. On stage 3: Game of Numbers
    
- [x] User Analytics
    1. Total Score
    2. Total Levels Cleared
    3. Total Time Spent
    4. Total Wrong Attempts
    5. Bar chart of Soft Skills Scores
    6. Donut chart of Time Elapsed

- [x] User Leaderboard
    1. Overall Rank
    2. Total Score
    3. Time Taken
    
- [x] Admin Panel which gives overall statistics
    1. Total Users
    2. Highest Score
    3. Average Score
    4. Average Time Taken
    5. Leaderboard
 
- [x] Multiple features in each level
    1. Brainstorming clues
    2. **Skip** to skip a stage by discarding any points rewarded for that level
    3. Previous levels become inaccessible, once user moves on to the next level
    4. On refreshing, the puzzle starts from the same level
    
# Glimpses of the Project
<p align="center">
        <img src="https://user-images.githubusercontent.com/79582204/236821964-ee58273c-653a-483d-b5b4-31e1c4064fc4.png" alt="Login page" width=900>
        <br>
        Login page
        <br><br>
        <img src="https://user-images.githubusercontent.com/79582204/236886970-3718453f-81de-4032-b716-786c44c42e80.png" alt="Home Page" width=900>
        <br>
        Home Page
        <br><br>
        <img src="https://user-images.githubusercontent.com/79582204/236822542-5613e75f-b47e-408b-abdb-209dff64db00.png" alt="Results" width=900>
        <br>
        Results
        <br><br>
        <img src="https://user-images.githubusercontent.com/79582204/236822814-e17137d4-9cd7-42fe-9080-d31fe368dd44.png" alt="Leaderboard" width=900>
        <br>
        Leaderboard
        <br><br>
        <img src="https://user-images.githubusercontent.com/79582204/236822977-32ad18ce-6de3-4179-a0d4-8cb15ec14de4.png" alt="Admin Login Page" width=900>
        <br>
        Admin Login Page
        <br><br>
        <img src="https://user-images.githubusercontent.com/79582204/236823090-e4d6cbe1-2d2c-4459-b6e2-c598ead67031.png" alt="Admin page" width=900>
        <br>
        Admin page
        <br><br>
</p>

# Detailed view of the game

## Story:
You play a detective tasked with solving a high-profile art heist that has been taken at a prestigious museum in a major city. The thief left only a cryptic note, which seems to be a clue to the painting's whereabouts. It's up to you to unravel the mystery and solve the case!

## Instructions:

- Upon completion of the game, the result page is displayed which shows the Soft Skills analysis of the user.
- Each level can be visited only once, however upon refreshing, the game will continue from the same level.
- The points are awarded for each correct answer, however penalty is applied in case of wrong submissions.
- You can skip any level, but points will not be awarded for the same. However, time spent for that level will be calculated as 0.
- There are two dead-ends in the game. In case of a dead-end, you will not be able to attempt any further riddles.

## Level 1: The Torn Note

### Soft Skill Analyzed:
- Attention to Detail

### Story:
As you investigate the crime scene, you discover a cryptic note left behind by the thief. You can find the note below.  
<p align="center">
<img src="https://user-images.githubusercontent.com/79582204/236834829-c43a327f-dfe5-4b68-b4ce-882caee1e7bf.png" alt="note" width=300>
</p>
After looking carefully at the note, it seems like the thieves have planned something on 9th May 2023 at a special place. But the name of the building written in the note is scrambled.

### Clue:
```
You remember a puzzle from your detective training that might help you decode the message:
"If GRASP is coded as TIZHK, what will be coded as OVTZXB?"
```

### Puzzle:
```
Using your codebreaking skills, you must decipher the code and figure out the name of the building. Once you've solved the puzzle, you'll be one step closer to uncovering the truth behind the heist.
```
### Solution

<details> 
  <summary>Click to see the solution.</summary>
   LEGACY <br>
   ( Each character is encoded to a character at the same index from the end as the original character is from the starting of the series of the alphabet. )
</details>

## Level 2: Mystery of Floors

### Soft Skill Analyzed:
- Creative Thinking

### Story:
You have reached the building to investigate further to find more clues about the heist. Now you are standing in front of the building but don't know the flat number. You asked an old person about the same, but he turned out to be a mathematics teacher. Now instead of directly telling the flat number, he gave you some clues.
<p align="center">
<img src="https://user-images.githubusercontent.com/79582204/236837323-6366c3e6-e010-487c-b10f-2ce3eba8cd0c.jpg" alt="building" width=350>
</p>

### Clue:
```
There are 10 floors in the building that are like 1, 2, 3,....10. Each even floor has nine flats, and each odd floor has ten flats. Flat numbers start from 1 and follow as we go up. Take the fourth odd floor and take a round. Descend down, leaving 4 floors in between. Now reach the next floor, and finally, you're on the right floor! Now wondering about the flat number? Maybe the last floor you were on could give you a clue about it...
```

### Puzzle:
```
Find the flat number and enter it below; if you successfully find the correct one, you will be getting one step closer.
```
### Solution

<details> 
  <summary>Click to see the solution.</summary>
   21 <br>
   ( The floor number i.e. 3 can be calculated by the given clues. The last floor i.e. 2 gives the hint about the flat number. There are 19 flats in total in the first two floors. So, the flat number of 2nd flat of 3rd floor is 21.  )
</details>

## Level 3: Game of Numbers

### Soft Skill Analyzed:
- Logical Reasoning

### Story:
Congrats! You have successfully reached the right place. But but! The door is locked. The door is equipped with a high-security lock which opens only after entering a four-digit code. Be cautious while trying to open the door, as upon entering 5 wrong passwords, it immediately sends a warning to the owner and in no time, they will come and kill you!
<p align="center">
<img src="https://user-images.githubusercontent.com/79582204/236837926-121aa0f2-991e-405d-b023-fe63b8581023.jpg" alt="door" width=350>
</p>

### Clue:
```
All the digits are unique and the positioning of the digits are from left to right as 1, 2, 3, 4. Each digit is either greater than or less than both of its neighbour digits. The sum of the first and the third digits is equal to the second digit. One of the digit is equal to first digit multiplied by the position of that digit. Three of the four digits are prime.
```

### Puzzle:
```
Try your luck by entering the password, and remember, if it's 5, your game is over!!!
```
### Solution

<details> 
  <summary>Click to see the solution.</summary>
   2538 or 2758 <br>
   ( It is a high-tech device and the clues narrow down the sample space of the possible passcodes. The machine has two correct answers. One is set by thief himself and one which was default and cannot be erased or changed. 2538 and 2758 are both acceptable. )
</details>

## Level 4: The Illusionary Indicator

### Soft Skill Analyzed:
- Deductive Reasoning

### Story:
When you entered the room, you found a painting on the wall, but do you think the thieves were that dumb? The painting is worth 1M dollars, and this is how they will treat it. Anyways, Good job! After investigating the painting, you found two signatures on the picture. One of them is the signature of the artist, but the other one seems unusual. You decided to investigate further as it made you think whether this painting was the original one.
<p align="center">
<img src="https://user-images.githubusercontent.com/79582204/236838393-b96e8748-9d89-4bc3-97ea-8c05713d7b0b.jpg" alt="room" width=350>
</p>

### Clue:
```
The signature reads "Nelots07IG"
```

### Puzzle:
```
You are left with nothing but this signature. It seems this signature is cryptic and might give the thief's name.You need to figure out a 10-letter name!
```
### Solution

<details> 
  <summary>Click to see the solution.</summary>
   ALESSANDRO <br>
   ( The signature is basically the username of an Instagram page, where the recent post is the spotify code of a playlist. The combination of the first letter of each song's name in the playlist sequentially gives the correct answer. )
</details>

## Level 5: The Last Game

### Soft Skill Analyzed:
- Spatial Reasoning

### Story:
When you reach the final destination with your team, you find five persons sitting in a circle and playing poker. All you know is one of them is a thief, and others are innocent. You can't arrest all 5 persons, so you have to choose one. Each person is identified with an English Alphabet. Below are some of the hints to identify the right person.
<p align="center">
<img src="https://user-images.githubusercontent.com/79582204/236838765-8acb5523-2f02-4caf-a729-e6d6f19b5ae6.jpg" alt="poker" width=350>
</p>

### Clue:
```
2 persons are continuously looking at their cards, while one person is drinking for quite a long time. B looks at the person before him drinking so much and cracks a joke about it. To this, everyone laughs except J and X, while X is quietly looking at his cards. Some rounds went by, and only one of them won every single round with quads of face cards every time. To this, G is furious and wants to leave the game but calms down. A says, "Let us have some wins too!" This time G wins and says, "Nothing stays forever with someone!". While this happens, B snatches a drink from the other side without her knowing and drinks it.
```

### Puzzle:
```
Find the thief!
```
### Solution

<details> 
  <summary>Click to see the solution.</summary>
   G <br>
   ( Here G is first seen furious when he is unable to win and that too without face cards. Then when he finally wins he says "Nothing stays forever with someone!" This signifies his mentality of a thief that he believes in taking away the things from others that he want. Also, he wants face cards to win. In a deck face cards are the closest match to a painting. )
</details>

# Tech stack:

<img src="https://user-images.githubusercontent.com/79582204/236824835-b7c99ad2-e24c-4c93-99d4-f5bfbe205642.png" alt="MERN" width=300 style="margin:auto">

## Frontend

![React](https://img.shields.io/badge/React-%23404d59.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Backend
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

## Database and Authentication
<img src="https://user-images.githubusercontent.com/79582204/236830541-8c2d9c69-6eac-4154-812b-5086a7f60f10.jpg" alt="mongo" width=100 style="margin:auto">

## Hosting 
<img src="https://user-images.githubusercontent.com/79582204/236830856-2a8dfa96-a458-4a8e-b40f-5fbe326129b6.png" alt="mongo" width=90 style="margin:auto">

# Project Set-up
## Install Node

Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

## Install Project

    $ git clone https://github.com/kartikk1/stolenbeauty.git
    $ cd server
    $ npm install
    $ cd client
    $ npm install
## Configure Project

This project uses MongoDB, to configure this project for your self, create project on mongoDB and replace credentials at required locations.

## Run Project
 For Backend:
 
    $ cd server
    $ nodemon src/index.js
    
 For Frontend: 
 
    $ cd client
    $ npm start
<br>
