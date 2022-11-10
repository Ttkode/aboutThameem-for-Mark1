var readlineSync = require('readline-sync')
//installed readLineSync
var score = 0
var highScore = [
  {
    name: "Benzema",
    score: 5
  },
  {
    name: "Ronaldo",
    score: 5
  }
]

var qOne = [{
  question: "Which is my favourite football club? ",
  answer: "Real Madrid"
  }, {
  question: "Who is my god father? ",
  answer: "who?"
   } , {
question: "Which is my Favourite F1 team? ",
  answer: "williams"  
    } , {
 question: "Who was the captain of Real Madrid in 21/22 season ",
  answer: "Marcelo"
    }, {
 question: "Whats the name of my dad? ",
  answer: "Mahashook "
   }
 ] // array

function welcome()
{  
console.log("Welcome to The.meme Quiz (hope you got the sarcasm🤤🤤)")
console.log(".......................")

var userName = readlineSync.question('Type your name, NOW!! ');
console.log('hmm, good work ' + userName + ' ,now lets begin!!');
console.log("........................")
}


var right ="Good, i think you know me.."
var wrong ="Nah, babe. Go type Thameem on google and see the answer there. "




// creating funtion
function questys(question, answer)
  { var ansr = readlineSync.question(question)

   // answer check and score update
  if  (ansr === answer) {
    console.log(right)
    score = score + 1
    console.log("Brownie points: ", score)
    console.log("............................") 
    
  } else {
    console.log(wrong)
    console.log("Brownie Points: ", score)
    console.log("..............................")
    
  }
  }


function play() {

for (var i=0; i<qOne.length; i++)
  { var qNow = qOne[i]
questys(qNow.question, qNow.answer)
  } // loop
}

function endProduct() {
console.log(" Total Brownie Points: ", score, "/5")
highScore.map(score => console.log(score.name, " : ", score.score))
console.log("If you scored 5, inform me via mail or socials, i will update it here")
  
console.log("Thank you for playing this game")

}

welcome ()
play()
endProduct()