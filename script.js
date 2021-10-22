const options = ["rock", "paper", "scissors"];
let userSelection;
let computerAnswer = computerPlay();
computerScore = 0;
userScore = 0;
const maxScore = 5;
// let result = userSelection.localeCompare(computerAnswer);
let buttons = document.querySelectorAll("button");
let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");









function computerPlay () {

    let computerAnswer = Math.floor(Math.random() * options.length);
    
      return options[computerAnswer];

         computerAnswer = options[computerAnswer];    
        
    };



   



function playRound(userSelection, computerAnswer) {

   

    // if (result === 0 === true) {
    //     console.log("tie");
    //     return;
    //     }   
   
        
if (userSelection && computerAnswer !== "paper") {
    console.log("You win");
    userScore++;
    return;
}
   
    else if (userSelection === "paper" && computerAnswer !== "scissors") {
        console.log("You win");
        userScore++;
        return;
    }
       else if (userSelection === "scissors" && computerAnswer !== "rock") {
           console.log("You win");
           userScore++;
           return;
       }
          

            else {
                console.log("Computer wins");
                computerScore++;
                return;
            }
    
  
};










let computerChoice = document.querySelector("#computerChoice");
let computerCounter = document.querySelector("#computerCounter");
let playerCounter = document.querySelector("#playerCounter");




buttons.forEach((button) => {
    

    button.addEventListener("click", () => {


        playRound(userSelection,computerAnswer);
        computerChoice.textContent = computerAnswer;
        computerCounter.textContent = computerScore;
        playerCounter.textContent = userScore;

    });

   
});





let reset = document.querySelector("#reset");

reset.addEventListener("click", () => {


computerChoice.textContent = "";
userSelection;


});





  btnPaper.addEventListener("click", () => {
    userSelection = "paper";
     console.log("you clicked paper");
})

     btnRock.addEventListener("click", () => {
      userSelection = "rock";
       console.log("you clicked rock");
})

        btnScissors.addEventListener("click", () => {
         userSelection = "scissors";
          console.log("you clicked scissors")
})





