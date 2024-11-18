let usreScore=0;
let comScore=0;
const usreScorepara=document.querySelector("#usre-score");
const comScoreScorepara=document.querySelector("#comp-score");

let coh=document.querySelectorAll(".choice");

const drawgame=()=>{
    console.log("game id draw");
}

const genComputerchoise=()=>{
    const option=["rock","poaper","scissors"];
    const randid=Math.floor(Math.random()*3)
    return option[randid];
    }
    const msg=document.querySelector("#msg");

  const showwinder=(usre)=>{
    if(usre){
        // console.log("you win")
        usreScore++;
        usreScorepara.innerText=usreScore;
          msg.innerText=("you win");
        
    }else{
        comScore++;
        comScoreScorepara.innerText=comScore;
        // console.log("you loss");
        msg.innerText=("you loss");
    }
  }


const playgame =(usearchoise) =>{
    console.log("usrachoice are made",usearchoise);
    // gnerate the comp choise
    const computerchoise=genComputerchoise();
    console.log("computer choise is", computerchoise);
    if(usearchoise===computerchoise){
        drawgame();
    }else{
        let usre=true;
        if(usearchoise==="rock"){
            // paper ,sec
           usre= computerchoise==="paper" ? false : true;
        }else if(usearchoise=== "paper"){
            // rock seissors
           usre= computerchoise==="scissors"?false : true;
           
        }
        else{
            // rock se
            usre=computerchoise==="rock"?false:true;
        }
        showwinder(usre);
    }
   



}

coh.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",() => {
        const usearchoise=choice.getAttribute("id");
        
        
playgame(usearchoise)
    })
})
