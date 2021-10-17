const options = ["rock", "paper", "scissors"];
let userSelection;
let computerAnswer = computerPlay();



function computerPlay () {

    let computerAnswer = Math.floor(Math.random() * options.length);
    
    
    return options[computerAnswer];
    computerAnswer = options[computerAnswer];    
        
    };

   
    function playRound(userSelection, computerAnswer) {
        
     userSelection = prompt("what is your selection? rock, paper, scissors");



        if (userSelection === "paper" && computerAnswer !== "scissors") {
            console.log("you win");

            console.log(computerAnswer);
                console.log(userSelection);
            
      
        }
       
          if (userSelection ==="rock" && computerAnswer !== "paper") {
                console.log("you win")

                console.log(computerAnswer);
                console.log(userSelection);
            }

         if (userSelection === "scissors" && computerAnswer !== "rock") {
                console.log("you win");

                console.log(computerAnswer);
                console.log(userSelection);
            }

         if (computerAnswer === "paper" && userSelection !== "scissors") {
               console.log("computer wins");

               console.log(computerAnswer);
                console.log(userSelection);

            }

         if (computerAnswer === "rock" && userSelection !== "paper") {
                console.log("computer wins");

                console.log(computerAnswer);
                console.log(userSelection);
            }

         if (computerAnswer === "scissors" && userSelection !== "rock") {
                console.log("computer wins");

                console.log(computerAnswer);
                console.log(userSelection);
            }

            if (computerAnswer === userSelection && userSelection === computerAnswer) {
                console.log("tie, play again");

                console.log(computerAnswer);
                console.log(userSelection);
            } 
            
        }
    
    
 
    


   