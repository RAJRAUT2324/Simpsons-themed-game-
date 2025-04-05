let gameseq=[];
let userseq=[];
let btncolor=["purple","green","red","yellow"];

let started=false;
let level=0;
// when click on the any value on the document then after clicking any key we will get game start//
let h2=document.querySelector("h2");
document.addEventListener("keypress",function ()
{
    if (started==false);
    {
        console.log("game is started");
        started=true;
        levelup();
    }

});
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(
        function ()
        { btn.classList.remove("flash");
},300);
}
function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(
        function ()
        { btn.classList.remove("userflash");
},300);
}
function levelup()
{   userseq=[];
    level++;
    h2.innerText=` level ${level}`;

    let rendidx=Math.floor(Math.random()*3);
    let randcolor=btncolor[rendidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnFlash(randbtn);
}
function check (idx)
{
    if(gameseq[idx]==userseq[idx])
    {
       if (userseq.length===gameseq.length)
       {
       setTimeout(levelup,1000); 
       }
    }
    else{
        h2.innerText=`Game over (-.-) , press any key to start the game`;
        reset();
    }


}
function buttonpress()
{   
    let btn = this;
    userFlash(btn);

    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
   check(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for ( btn of allbtns)
{
    btn.addEventListener("click",buttonpress);
}
function reset()
{
    started=0;
    gameseq=[];
    userseq=[];
    level=0;

}
