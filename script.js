let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random() * 9);
}
const compareGuesses = (human, computer, secret) =>{
   let ans1 = Math.abs(secret - human); 
   let ans2 = Math.abs(secret - computer);
   if(ans1 < ans2){
     return true
   }
   else if(ans1 === ans2){
     return true
   }
   else{
     return false;
   }
}
const updateScore = a =>{
  if(a === 'human'){
    humanScore += 1;
  }
  else if (a === 'computer'){
    computerScore += 1;
  }
}
const advanceRound = () =>{
  currentRoundNumber += 1;
}