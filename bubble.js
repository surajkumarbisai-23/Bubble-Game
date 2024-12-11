// document.getElementById("score").textContent="00";
// document.getElementById("hit").innerHTML="00";

let hitNum=0;
let score=0;
let container_bag=document.querySelector(".container-btm");
let container_start=document.querySelector(".container-detail");

let btton=`<button onclick="start()">Start</button>`;

function start(){
    makeBubble();
    setTimer();
    hitBubble();
    // scoreUpdate();
}


function makeBubble(){
    let bag="";
    for(let i=1;i<254;i++){
        let num=Math.floor(Math.random()*10);
        bag+=`<div class="bubble">${num}</div>`;
    }
    container_bag.innerHTML=bag;
}

function setTimer(){
    let time=10;
    if(time>0){
        container_start.innerHTML="";
    }
    let timeIn=setInterval(function(){
        if(time>0){
            time--;
            document.getElementById("timer").innerHTML=time;
        }
        else{
            alert("Time finished");
            document.getElementById("timer").innerHTML="00";
            clearInterval(timeIn);
            container_bag.innerHTML="";
            container_start.innerHTML=btton;
            document.getElementById("score").innerHTML=00;

        }

    },1000);
}

function hitBubble(){
    hitNum=Math.floor(Math.random()*10)
    document.querySelector("#hit").innerHTML=hitNum;
}


function scoreUpdate(){
    score+=10;
    document.getElementById("score").innerHTML=score;
}


container_bag.addEventListener('click',function(d){
    let hitn=Number(d.target.textContent);
    if(hitn==hitNum){
        scoreUpdate();
        makeBubble();
        hitBubble();
    }
});