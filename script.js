const options = ["rock", "paper", "scissors"];
let userSelection = "paper";


let computerAnswer = computerPlay();

function computerPlay () {

    let computerAnswer = Math.floor(Math.random() * options.length);
    // let index = computerAnswer;

    
    return options[computerAnswer].toUpperCase();
    computerAnswer = options[computerAnswer];    
        
    };

    function playRound(userSelection, computerAnswer) {
        console.log(computerAnswer)
    }

    


   
   
    














