
const options = ["rock", "paper", "scissors"];
let userSelection;
computerScore = 0;
userScore = 0;
const maxScore = 5;
// let result = userSelection.localeCompare(computerAnswer);
let buttons = document.querySelectorAll("button");
let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");
let winner;
let winnerText = document.getElementById("winner");










function computerPlay () {

    let computerAnswer = Math.floor(Math.random() * options.length);
     
      return options[computerAnswer];

         computerAnswer = options[computerAnswer];    
        
    };

  



    

   



function playRound(userSelection, computerAnswer) {

  
};



   computerPlay();

   if (computerAnswer == userSelection) {
       console.log("tie");
       return;
   }
      if(userSelection === computerAnswer) {
          console.log("tie");
          return;
      }


   if (computerAnswer === "rock" && userSelection !== "paper") {
    console.log("Computer wins");
    computerScore++;
    winner = "Computer";
    
}
   
     else if (computerAnswer === "paper" && userSelection !== "scissors") {
        console.log("Computer wins");
        computerScore++;
        winner = "Computer";
        
    }
       else if (computerAnswer === "scissors" && userSelection !== "rock") {
           console.log("Computer wins");
           computerScore++;
           winner = "Computer";
           
       }
           
    
            else  if (userSelection === "rock" && computerAnswer !== "paper") {
                console.log("You win");
                userScore++;
                winner = "Player";
                
            }
               else if (userSelection === "paper" && computerAnswer !== "scissors") {
                   console.log("you win");
                   userScore++;
                   winner = "Player";
               }
                else if(userSelection === "scissors" && computerAnswer !== "rock") {
                    console.log("you win");
                    userScore++;
                    winner = "Player";
                }

                    if(userScore  === 5) {
                        endGame();
                    }
                       else if(computerScore === 5) {
                           endGame();
                       }
          
  
} 





let computerChoice = document.querySelector("#computerChoice");
let computerCounter = document.querySelector("#computerCounter");
let playerCounter = document.querySelector("#playerCounter");







buttons.forEach((button) => {
    

    button.addEventListener("click", () => {

    
       computerAnswer = computerPlay();
        playRound(userSelection,computerAnswer);
        computerChoice.textContent = computerAnswer;
        computerCounter.textContent = computerScore;
        playerCounter.textContent = userScore;


        
        winnerText.textContent = `${winner} wins the round`;
        


   
});


});


//       return "you win the game," +"your score is : " + userScore;







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

};





let reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    btnPaper.disabled = false;
    btnRock.disabled = false;
    btnScissors.disabled = false;
    playerCounter.textContent = 0;
    computerCounter.textContent = 0;
    computerChoice.textContent = "";
    winnerText.textContent = "";
    
})






function endGame() {
    btnPaper.disabled = true;
    btnRock.disabled = true;
    btnScissors.disabled = true;

}










