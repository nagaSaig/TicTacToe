const boxes=document.querySelectorAll(".gamebox");
const newbtn=document.querySelector(".newbtn");
const resetbtn=document.querySelector(".resetbtn");
const msg=document.querySelector("#msg");
const msgcontainer=document.querySelector(".msgcontainer");

let trunO=true;
let count=0;

const winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trunO){
            box.innerText="O";
            trunO=false;
        }
        else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;
        count++;
        let winner=checkWinner();
        if(count===9&&!winner){
            gameDraw();
        }
    });
});

const checkWinner=()=>{
    for(let pattern of winningPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congo winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disable=true;
    });
};
const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });
};
const gameDraw=()=>{
    msg.innerText=`game was a draw`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const resetGame=()=>{
    trunO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
