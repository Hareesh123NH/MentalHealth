let boxes = document.querySelectorAll(".box");
let resetBtnEl = document.getElementById("reset-btn");
let msg = document.querySelector(".msg");
let newBtn = document.getElementById("new-btn");
let msgContainerEl = document.querySelector(".msg-container");

let player0 = true;

let winningChance = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]





let showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainerEl.classList.remove("hide");

}
let showLoser = () => {
    msg.innerText = "No Winner";
    msgContainerEl.classList.remove("hide");
}

let resetBtn = () => {
    player0 = true;
    enabledBtn();
    msgContainerEl.classList.add("hide");
}

let disabledBtn = () => {
    for(let box of boxes) {
        box.disabled = true;
    } 
}

let enabledBtn = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    } 
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(player0){
            box.textContent = "0";
            player0 = false;
        }
        else{
            box.textContent = "X";
            box.style.color = "red";
            player0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
    
}) 


const checkWinner = () => {
    for(let pattern of winningChance){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                disabledBtn();
            }
            /*else if(pos1Val !== pos2Val !== pos3Val){
                showLoser();
                
            }*/
            /*else if(myBest != (pos1Val && pos2Val && pos3Val)) {
                showLoser();
            }*/
        }
        
        
        
    }
    
}

resetBtnEl.addEventListener("click" , resetBtn);
newBtn.addEventListener("click" , resetBtn);