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










function computerPlay () {

    let computerAnswer = Math.floor(Math.random() * options.length);
    
      return options[computerAnswer];

        //  computerAnswer = options[computerAnswer];    
        
    };

  



    

   



function playRound(userSelection, computerAnswer) {

  

    
    
    computerPlay();

   


   if (computerAnswer === "rock" && userSelection !== "paper") {
    console.log("Computer wins");
    computerScore++;
    
}
   
     else if (computerAnswer === "paper" && userSelection !== "scissors") {
        console.log("Computer wins");
        computerScore++;
        
    }
       else if (computerAnswer === "scissors" && userSelection !== "rock") {
           console.log("Computer wins");
           computerScore++;
           
       }
           
    
            else  if (userSelection === "rock" && computerAnswer !== "paper") {
                console.log("You win");
                userScore++;
                
            }
               else if (userSelection === "paper" && computerAnswer !== "scissors") {
                   console.log("you win");
                   userScore++;
               }
                else if(userSelection === "scissors" && computerAnswer !== "rock") {
                    console.log("you win");
                    userScore++;
                }
          
  
};





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
        



   
});


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






