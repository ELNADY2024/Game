const throwbtn =document.getElementById("throw btn");

const tryAgainBtn = document.getElementById("Try again btn");

const user= document.getElementById("user points");
const computer=document.getElementById("computer points");
const  Throws= document.getElementById("totalt throws");
const action =document.getElementById("game over");
const GameOver=document.getElementById("Try again");


const userChoices=["Sten" ,"Påse" , "Sax"];
let usersPoints = 0;
let computerPoints = 0;
let totaltThrows = 0;

const hideChoices=()=>{
    document.getElementById("user-sten").classList.add(`hide`);
    document.getElementById("user-påse" ).classList.add(`hide`);
    document.getElementById("user-sax").classList.add(`hide`);
    document.getElementById("computer-sten").classList.add(`hide`);
    document.getElementById("computer-påse").classList.add(`hide`);
    document.getElementById("computer-sax").classList.add(`hide`);

};

const showChoice= (player,choice)=>{
    document.getElementById(`${player}-${choice}`).classList.remove(`hide`);
    
};

const getRandomChoice= ()=>{
    const randomindex= Math.floor(Math.random()*3);
    return userChoices[randomindex];
};


const whoIsWinner = (userThrow, ComputerThrow)=>{
    if (userThrow===ComputerThrow){
        return`none`;
    }
    if (
        (userThrow==="sten"&& ComputerThrow==="sax")||
        (userThrow==="sax"&& ComputerThrow==="påse")||
        (userThrow==="påse"&& ComputerThrow==="sten")
    ){
        return`user`;
    }
        return`computer`;
    };

    const updateScores = (winner) => {
        if (winner === 'user') {
            usersPoints++;
            usersPoints.textContent = `${usersPoints} point${usersPoints !== 1 ? 's' : ''}`;
        } else if (winner === 'computer') {
            computerPoints++;
            computerPoints.textContent = `${computerPoints} point${computerPoints !== 1 ? 's' : ''}`;
        }
        totaltThrows++;
        totaltThrows.textContent = `${totaltThrows} throw${totaltThrows !== 1 ? 's' : ''}`;
    };

    const checkGameOver = () => {
        if (usersPoints === 5 || computerPoints === 5) {
            tryAgainBtn.textContent = usersPoints === 5 ? 'Game over. you win!' : 'Game over. computer win!';
           action.style.display = 'block';
            throwbtn.style.display = 'none';
        }
    };
const resetGame=()=>{ 
    usersPoints = 0;
 computerPoints = 0;
 totaltThrows = 0;
 usersPoints.textContent =`0 points`;
 computerPoints.textContent =`0 points`;
 totaltThrows.textContent =`0 points`;
 action.style.display = 'none';
            throwbtn.style.display = 'block';
 hideChices();
};

throwbtn.addEventListener(`click`,()=>{const userThrow = getRandomChoice();
    const computerThrow = getRandomChoice();
    hideChoices();
    showChoice('user', userThrow);
    showChoice('computer', computerThrow);
    const winner = determineWinner(userThrow, computerThrow);
    updateScores(winner);
    checkGameOver();
});

tryAgainBtn.addEventListener('click', resetGame);

window.onload = resetGame;





