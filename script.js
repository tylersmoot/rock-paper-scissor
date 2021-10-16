const options = ["rock", "paper", "scissors"];
let userSelection = "paper";
let computerAnswer = computerPlay();



function computerPlay () {

    let computerAnswer = Math.floor(Math.random() * options.length);
    
    
    return options[computerAnswer];
    computerAnswer = options[computerAnswer];    
        
    };

   
    function playRound(userSelection, computerAnswer) {
        
        if (userSelection === "paper" && computerAnswer !== "scissors") {
            console.log("you win");
            console.log(userSelection + "your answer");
            console.log(computerAnswer + "computer answer");
        }
            else if (userSelection ==="rock" && computerAnswer !== "paper") {
                console.log("computer wins")
            }

            else if (userSelection === "scissors" && computerAnswer !== "rock") {
                console.log("you win");
            }
            
            
        } 
    
    
    

    


   