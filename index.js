var readline = require('readline-sync');
const chalk =require('chalk');

//Score variable to score the players score
var score = 0;

//Array to store highscores
var highscores = 
[
  {
    name:"parth",
    score:6,
  },
  {
    name:"tej",
    score:5,
  },
  {
    name:"deepak",
    score:4,
  },  
]

//Taking user's name and welcoming him/her.
var userName = readline.question(chalk.green.bold("What's your name? "));
console.log("\n");
console.log(chalk.black.bold.bgWhite("Welcome " + userName + " to the the SPACEX quiz!!\n"));
console.log(chalk.black.bold.bgWhite("Answer using a,b,c,d alphabets ONLY!!\n"));

//Function to run the quiz using the quizques array and calculate score.
function quiz(question,answer) 
{
  var userAnswer = readline.question(chalk.blue.bold(question));
  if(userAnswer === answer){
    console.log(chalk.italic("You were right!"));
    score++;
  }
  else{
    console.log("You were wrong!");
  }
  console.log("----------")
}

//array of questions and their respective answers stored using objects
var quizques = [
  {
    question:`In which year was SPACEX founded?
    a. 2002
    b. 1990
    c. 2016\n`,
    answer:"a",
  },
  {  
    question:`How many engines does the Falcon 9 rocket have?
    a. 4
    b. 9
    c. 6\n`,
    answer:"b",
  },
  {  
    question:`Which rocket engine is used in Falcon 9 rocket?
    a. Kestrel
    b. Raptor
    c. Merlin\n`,
    answer:"c",
  },
  {  
    question:`Is Falcon Heavy rocket the most powerful operational rocket currently?
    a. True
    b. False\n`,
    answer:"a",
  },
  {
    question:`SPACEX is headquatered in _______?
    a. Hawthorne, California
    b. Miami, Florida
    c. Los Angeles, California\n`,
    answer:"a",
  },
  {
    question:`Which is the first rocket that SPACEX made?
    a. Falcon 9
    b. Falcon 1
    c. Starship
    d. Falcon Heavy\n`,
    answer:"b",        
  }
]

//for loop for taking question and answer from array and passing it to the quiz function
for(var i = 0; i<quizques.length; i++){
  quiz(quizques[i].question,quizques[i].answer);
}

//printing the final score to the user
console.log(chalk.black.bold.bgWhite("You Scored " + score+"\n"));

//checking for high score. I am only comparing the current score to the score of the first user in highscore array.
if(score>=highscores[0].score){
  console.log(chalk.black.bold.bgGreen("Congratulations!! You have scored a HIGH SCORE!!!\n"));
  console.log(chalk.black.bold.bgGreen("Please Share a screenshot of your score so I can update the scores.\n"));
}

//printing the current highscores
console.log(chalk.bold.magenta("Current High Scores"));
console.log("Name:::Score")
for(var i=0; i<highscores.length; i++){
  console.log(highscores[i].name + ":::" + highscores[i].score);
}