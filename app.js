var userScore = 0;
var compScore = 0;

const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.getElementById("resultp")
// const result_p = document.querySelector(".result > p")


const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const sissor_div = document.getElementById("s")


const rps = ["r","p","s"]
const rpsMapStr = {"r":"Rock", "p":"Paper", "s":"Sissor"}
const rpsMapObj = {"r":rock_div, "p":paper_div, "s":sissor_div}

const small_user = "user".fontsize(3).sub()
const small_comp = "comp".fontsize(3).sub()


function win(userChoice, compChoice){
    userScore +=1 
    userScore_span.innerHTML = userScore
    result_p.innerHTML = `${rpsMapStr[userChoice]}${small_user} Beats ${rpsMapStr[compChoice]}${small_comp} . You WIN !`
    // console.log("User Wins")
    rps_div = rpsMapObj[userChoice]
    rps_div.classList.add('green-glow')
    setTimeout(() => rps_div.classList.remove('green-glow'), 400)


}

function lose(userChoice, compChoice){
    compScore +=1
    compScore_span.innerHTML = compScore
    result_p.innerHTML = `${rpsMapStr[compChoice]}${small_comp} Beats ${rpsMapStr[userChoice]}${small_user} . You LOSE !`
    // console.log("Computer Wins")
    rps_div = rpsMapObj[userChoice]
    rps_div.classList.add('red-glow')
    setTimeout(function(){
        rps_div.classList.remove('red-glow')
    }, 400)


}
    
function draw(userChoice, compChoice){
    result_p.innerHTML = `${rpsMapStr[compChoice]}${small_comp} & ${rpsMapStr[userChoice]}${small_user} . Its a DRAW !!`
    // console.log("Draw, Play Again")
    rps_div = rpsMapObj[userChoice]
    rps_div.classList.add('gray-glow')
    setTimeout(function(){
        rps_div.classList.remove('gray-glow')
    }, 400)


}

function getRandomCompChoice(){
    randIndex = Math.floor(Math.random() * 3)
    return rps[randIndex]
}

function game(userChoice){
    compChoice = getRandomCompChoice()
    switch(userChoice+compChoice){
        case "rp":
        case "ps":
        case "sr":
            win(userChoice, compChoice)
            break;
        case "pr":
        case "sp":
        case "rs":
            lose(userChoice, compChoice)
            break;
        default:
            draw(userChoice, compChoice)
            break;
    }
}


function main(){
    rock_div.addEventListener("click", function(args){
        game("r")
        // console.log("You just picked ROCK !!")
        // console.log(args)
    })
    
    paper_div.addEventListener("click", function(args){
        game("p")
    })
    
    sissor_div.addEventListener("click", function(args){
        game("s")
    })
}

main();