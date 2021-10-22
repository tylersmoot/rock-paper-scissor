const options = ["rock", "paper", "scissors"];
let userSelection = "rock";
let computerAnswer = computerPlay();
computerScore = 0;
userScore = 0;
const maxScore = 5;
let result = userSelection.localeCompare(computerAnswer);




function computerPlay () {

    let computerAnswer = Math.floor(Math.random() * options.length);
    
    
    return options[computerAnswer];
    computerAnswer = options[computerAnswer];    
        
    };

   



function playRound(userSelection, computerAnswer) {

    if (result === 0 === true) {
        console.log("tie");
        return;
        }   
   
        
if (userSelection === "rock" && computerAnswer !== "paper") {
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



           

        


        











// function game () {


//         playRound(userSelection, computerAnswer); 



// if (userScore < computerScore) {

//     return "computer wins the game";

     
// }

//    else if (userScore > computerScore) {

//       return "you win the game," +"your score is : " + userScore;


// }






function reset () {

    userScore = 0;
    computerScore = 0;

};


      
            




        
     
    
 
    


   