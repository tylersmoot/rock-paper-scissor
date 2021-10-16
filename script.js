const options = ["rock", "paper", "scissors"];




function computerPlay () {

    let computerAnswer = Math.floor(Math.random() * options.length);
    let index = computerAnswer;

    
    return options[computerAnswer].toUpperCase();
    computerAnswer = options[computerAnswer];   /*  testing this option  */
        
    };







function userPlay (arg) {


for (let i = 0; i < options.length; i++) {
    
let userAnswer = arg;
if (userAnswer !== options[i]) {
    return "Not an anwswer";
}


return userAnswer.toUpperCase();


}

};



