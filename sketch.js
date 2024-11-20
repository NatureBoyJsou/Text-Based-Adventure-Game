// JOSH SOURBEER ADVENTURE GAME FINAL VERSION RUBRIC ELEMENTS:

// AT LEAST 3 UNIQUE ROOMS: PROJECT HAS MORE THAN THREE UNIQUE ROOMS

// CONDITIONALS: SEE LINES 169-247 FOR IF STATEMENTS

// LOOP: SEE LINES 296-300 FOR THE DICE ROLL SETUP, AND LINES 134-141 FOR THE DICE ROLL TEST LOOP

// IMAGES: SEE EACH ROOM FOR DIFFERENT IMAGES. LAST COMPLETION SCREEN IMAGE IS A CUSTOM ONE FROM POWERPOINT

// SOUND EFFECTS: WOLF, PUPPY, SNAKE SOUND EFFECTS LOOP IN DOORS 1-3, THEN END UPON CLEARING THE ROOM


// INITIAL LET DEFINITIONS
let gameState = "start";  
let message = "You enter a dark room \n and find 3 doors: choose your door Press the Number 1,2,3";
let startImage;  
let rolled = false;  
let diceResult;  



// PRELOADED IMAGES
function preload() {
  startImage = loadImage('3 DOORS.png'); 
  gs0Image = loadImage('intothepit.png');
  gs1Image = loadImage('wolfinroom.jpg');
  gs2Image = loadImage('cutepuppy.jpg');
  gs3Image = loadImage('Snaketrivia.png');
  gs4Image = loadImage('SingleDoor.png');
  gs7Image = loadImage('PuppyBlob.jpg');
  gs9Image = loadImage('twodoors.jpg');
  gs11Image = loadImage('anaconda.png');
  gs12Image = loadImage('SingleDoor.png');
  gs13Image = loadImage('congrats.png')
  gs14Image = loadImage('roomonfire.jpg');
  gs5Image = loadImage('happyfatwolf.png');
  gs15Image = loadImage('sportsteams.png');
  gs1Audio = loadSound('wolf-howl-6310.mp3');
  gs2Audio = loadSound('bark-36916.mp3');
  gs3Audio = loadSound('snake-rattle-sound-hq-240150.mp3');
}

// CUSTOM FONT
function setup() {
  createCanvas(1000, 800);
  textFont("Bangers");
  textSize(35);
}

// DRAW
function draw() {
  background(0);

// IMAGES AND THEIR LOCATION ON THE SCREEN IN RELATION TO GAME STATE
  if (gameState === "start") {
    image(startImage, 0, 0, width, height);  
  } else if (gameState === "0") {
    image(gs0Image, 1, 1, width, height);
  } else if (gameState === "1") {
    image(gs1Image, 1, 1, width, height);
  } else if (gameState === "2") {
    image(gs2Image, 1, 1, width, height);
  } else if (gameState === "3") {
    image(gs3Image, 1, 1, width, height);
  } else if (gameState === "4") {
    image(gs4Image, 1, 1, width, height);
  } else if (gameState === "7") {
    image(gs7Image, 1, 1, width, height);
  } else if (gameState === "9") {
    image(gs9Image, 1, 1, width, height);
  } else if (gameState === "11") {
    image(gs11Image, 1, 1, width, height);
  } else if (gameState === "12") {
    image(gs12Image, 1, 1, width, height);
  } else if (gameState === "13") {
    image(gs13Image, 1, 1, width, height);
  } else if (gameState === "5") {
    image(gs5Image, 1, 1, width, height);
  } else if (gameState === "15") {
    image(gs15Image, 1, 1, width, height);
  } else if (gameState === "14") {
    image(gs14Image, 1, 1, width, height);
}
    
// FIND THE CENTER OF THE MAZE
  
  fill('yellow');
  textAlign(CENTER);
  text(message, width / 2, height / 5);

// GAME STATES
  
// YOU MOVE PAST THE WOLF BUT FALL INTO A PIT
  if (gameState === "0") {
    message = "You have fallen into a pit and have died, press l to try again";
    
// YOU ENCOUNTER A WOLF
  } else if (gameState === "1") {
    message = "You open 🚪 1 and find a wolf 🐺 press a to attack or r to run away";
  } else if (gameState === "2") {
    
// YOU ENCOUNTER A PUPPY
    message = "You open 🚪 2 and find a cute puppy 🐶 \n Press p to pet or b to bypass";
  } else if (gameState === "3") {
    
// YOU ENCOUNTER A SNAKE
    message = "You open 🚪 3 and find a snake 🐍 \n The snake says \n You must answer my trivia question to proceed. \n Press h for a History question \n Press s for a Sports Question"
    
// STARTING SCREEN 
  } else if (gameState === "start") {
    message = "Find the center of the maze! \n  There are 3 doors: Choose your door! Press 1,2,3";
    
// YOU KILL THE WOLF 
  } else if (gameState === "4") {
    message = "You attack the wolf and slay it. \n You find 1 more door, press 5 to go through";
    
// YOU RUN AWAY FROM THE WOLF
  } else if (gameState === "5") {
    message = "You run away";
    RunAway();
    
// YOU FALL INTO A PIT AFTER KILLING THE WOLF
  } else if (gameState === "6") {
    message = "You open a door and immediately fall into a pit and die press l to restart";
    YouDied();
    
// THE PUPPY TURNS INTO A BLOB AND ENGULFS YOU
  } else if (gameState === "7") {
    BlobDeath();
    
// YOU MOVE AROUND THE PUPPY
  } else if (gameState === "8") {
    Bypass();
    
// ROLL TO SEE IF YOU CAN MAKE IT PAST THE PUPPY
  } else if (gameState === "rolled") {
    // Display the dice roll result message
    if (diceResult > 3) {
      message = `You rolled a ${diceResult} and made it past the puppy! \n Press c to move to the next room.`;
    } else {
      // Dice roll failed, call BlobDeath
      BlobDeath();
    }
// YOU ARE PAST THE PUPPY AND SEE TWO MORE DOORS
  } else if (gameState === "9") {
      message = "You enter a room with 2 more doors! \n Press g for the left door or j for the right door";
    
// HISTORY TRIVIA QUESTION
  } else if (gameState === "10") {
      message = "Which of the following is the bloodiest single day battle in U.S. history? \n Press $ for Gettysburg \n Press % for Chickamauga \n Press ^ for Antietam \n Press & for Chancellorsville";
    
// INCORRECT TRIVIA ANSWER
  } else if (gameState === "11"){
    message = "The snake informs you that you have answered incorrectly \n by immediately biting your throat. \n You proceed to die. Press l to restart";
    
// CORRECT TRIVIA ANSWER
  } else if (gameState === "12"){
    message = "The snake moves to the side and allows you to pass. \n Press m to move past the snake through the next door";
  } else if (gameState === "13"){
    message = " "

// YOU CHOSE THE WRONG DOOR AFTER THE PUPPY
  } else if (gameState === "14"){
    message = "You open the door and immediately are engulfed in flames, \n you burn to a fiery death. Press l to restart";
    
// SPORTS TRIVIA QUESTION
  } else if (gameState === "15"){
    message = "Which of the following sports teams have live mascots? \n Press < for Colorado U \n Press > for Georgia Tech \n Press ? for Missouri U \n Press / for Penn State"
  }
}

// KEY PRESSES AND THEIR MEANINGS

function keyPressed() {

// DOOR #1
  if (key === '1') {
    gameState = "1";
    gs1Audio.loop();
  } else if (key === '2') {
    
// DOOR #2
    gameState = "2";
    gs2Audio.loop();
  } else if (key === '3') {
    
// DOOR #3
    gameState = "3";
    gs3Audio.loop();
    
// ATTACK ACTION
  } else if (key === 'a') {
    gs1Audio.stop();
    gameState = "4";
    
// RUN AWAY ACTION
  } else if (key === 'r') { 
    gs1Audio.stop();
    gameState = "5";
    
// GO THROUGH THE POST WOLF DOOR
  } else if (key === '5') {
    gameState = "6";
    
// RESTART THE GAME
  } else if (key === 'l') {
    gameState = "start";
    rolled = false;  
    

  } else if (key === 'p') {
    gameState = "7";
    gs2Audio.stop();
  } else if (key === 'b') {
    gameState = "8";
    gs2Audio.stop();
    rolled = false;  
    
// ROLL THE DICE
  } else if (gameState === "8" && key === 'd') {
    RollPuppy();  // Roll the dice when 'd' is pressed
  } else if (gameState === "9" && key === 'c') {
    // Move to the next room or handle next steps
    
// SUCCESSFUL DICE ROLL! MOVE INTO A TWO DOOR ROOM
  } else if (key === "c") {
    gameState = "9";
    
// GET A HISTORY QUESTION
  } else if (key === "h") {
    gameState = "10";
    gs3Audio.stop();
  } else if (key === "$") {
    gameState = "11";
  } else if (key === "%") { 
    gameState = "11";
  } else if (key === "^") {
    gameState = "12";
  } else if (key === "&") {
    gameState = "11";
  } else if (key === "m") {
    gameState = "13";
    
// CHOOSE THE LEFT DOOR
  } else if (key === "g") {
    gameState = "14";
    
//CHOOSE THE RIGHT DOOR
  } else if (key === "j") {
    gameState = "13";
    
// GET A SPORTS QUESTION
  } else if (key === "s") {
    gameState = "15";
    gs3Audio.stop();
  } else if (key === ">") {
    gameState = "11";
  } else if (key === "?") {
    gameState = "11";
  } else if (key === "/") {
    gameState = "11";
  } else if (key === "<") {
    gameState = "12"
  }
}


// FALLING INTO A PIT AND DYING

function YouDied() {
  gameState = "0";   
  message = "You failed";
}

// RUN AWAY FROM THE WOLF

function RunAway() {
  message = "Ha Ha Ha 😂 You run away but trip over a \n rock and are eaten by the wolf. \n He laughs as you enter his belly. \n Press l to restart";
}

// DIE FROM THE PUPPY

function BlobDeath() {
  message = "The puppy transforms into a massive blob and engulfs you, \n you have drowned! press l to restart";
  gameState = "7";
}

// BYPASS THE PUPPY WITH DICE ROLL

function Bypass() {
  message = "Press d to roll a 6-sided die to see if you can bypass the puppy";
}


// LOOP THAT HANDLES THE DICE ROLL AT THE PUPPY STAGE

function RollPuppy() {
  if (!rolled) {  
    diceResult = int(random(1, 7));  
    gameState = "rolled";  
    rolled = true;  
  }
}
