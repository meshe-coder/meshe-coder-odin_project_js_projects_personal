function getComputerChoice(){
    const choices = ["rock","paper","scissors"]
    let index = Math.floor(Math.random() * 3)
    return choices[index]
}
const button = document.querySelector("button")
function getHumanChoice(){
const choice = prompt("what is your choice").toLowerCase();
return choice
}
button.addEventListener("click",playRound)
let humanScore=0
let computerScore=0
function playRound(){
    text=document.querySelector("p");
    const humanChoice=getHumanChoice();
    const computerChoice=getComputerChoice();
    if(humanChoice==="rock" && computerChoice==="scissors"){
        humanScore +=1
        return text=`Rock takes it home:you ${humanScore} comp${computerScore}`
        
    }
    else if(humanChoice==="rock" && computerChoice==="paper"){
        computerScore +=1;
        return text.textContent=`Ouch!!:you ${humanScore} comp${computerScore}`
        
    }
    else if(humanChoice==="scissors" && computerChoice==="paper"){
        humanScore +=1
        return text.textContent=`hurrah!:you ${humanScore} comp${computerScore}`
        
    }
    else if(humanChoice==="scissors" && computerChoice==="rock"){
        computerScore +=1
        return text.textContent=`damn!you ${humanScore} comp ${computerScore}` 
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        humanScore +=1;
        return text.textContent=`yes sir! :you ${humanScore} comp${computerScore} `
    }
    else if (humanChoice==="paper" && computerChoice==="scissors"){
        computerScore +=1;
        return text.textContent=`try again! :you ${humanScore} comp${computerScore}`
    }
    else{
        return text.textContent=`tie!!!:you ${humanScore} comp${computerScore}`
    }
    }



