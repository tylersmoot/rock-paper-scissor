const options = ["rock", "paper", "scissors"];
let userSelection;
let computerAnswer = computerPlay();
computerScore = 0;
userScore = 0;




function computerPlay () {

    let computerAnswer = Math.floor(Math.random() * options.length);
    
    
    return options[computerAnswer];
    computerAnswer = options[computerAnswer];    
        
    };

   



function playRound(userSelection, computerAnswer) {
        
     userSelection = prompt("what is your selection? rock, paper, scissors");



     if (computerAnswer === userSelection && userSelection === computerAnswer) {
        // console.log("tie, play again");



     
    } 
  

        if (userSelection === "paper" && computerAnswer !== "scissors") {
            // console.log("you are round winner");

           
      userScore++;
        }
       
          if (userSelection ==="rock" && computerAnswer !== "paper") {
                // console.log("you are round winner");

               
                userScore++;
            }

         if (userSelection === "scissors" && computerAnswer !== "rock") {
                // console.log("you are round winner");

                
                userScore++;
            }

         if (computerAnswer === "paper" && userSelection !== "scissors") {
            //    console.log("computer wins this round");

              
                computerScore++;

            }

         if (computerAnswer === "rock" && userSelection !== "paper") {
                // console.log("computer wins this round");

              
                computerScore++;
            }

         if (computerAnswer === "scissors" && userSelection !== "rock") {
                // console.log("computer wins this round");

                
                computerScore++;
            }

          
            
        }


        function game () {

for (let i =0; i < 5; i++) {
    playRound(userSelection, computerAnswer);
    
  

}

if (userScore < computerScore) {

    return "computer wins the game";


    // logs the score at end of 5 game loop
    // console.log("Computer total wins: " + computerScore);
    // console.log("Your total wins: " + userScore);
    
    
}
else if (userScore > computerScore) {

    return "you win the game" +"score" + userScore;

    // logs the score at end of 5 game loop
    // console.log("Computer total wins: " + computerScore);
    // console.log("Your total wins: " + userScore);


}



}





function reset () {
    userScore = 0;
    computerScore = 0;
}

        





      
            




        
     
    
 
    


   