//assinging const nd vrbls
let inputdirection ={x:0 , y:0};
let score = 0;
let snakearray=[{x:5 , y : 13}];
 jsfood ={x: 6, y :10};
const bewafaaudio4k = new Audio('song.mp3');
//let speed=3;
const lostsound = new Audio('mix.mp3');
const fdsound = new Audio('food.mp3');
var speed= prompt("choose the speed loser 😈 " ,3);
let pausebuttonjs = false;
let musicplaying = true;
let pausetime=0;
let nightvalue = false;
function musicend(){
    if(musicplaying){
        bewafaaudio4k.pause();
        musicplaying = false;
        return;
    }
    else{
 bewafaaudio4k.play();
 musicplaying = true;
    }
}
//function musicstart(){
//bewafaaudio4k.play();

//musicplaying=true;
//}
//.
var bodycolor = document.getElementById("body");
var gridcolor = document.getElementById("grid");
//var buttoncolor = document.getElementId("nightbuts");
function nightmode(){

    if(nightvalue){
       //var bodycolor1 = document.getElementById("body");
       bodycolor.classList.remove('nightmode1_body');
       bodycolor.classList.add('lightmode1_body');
       console.log("lightmode");
   //  buttoncolor.classList.remove('pausebutton');
   var nightlightbutons = document.getElementById("nightbuts");
   nightlightbutons.classList.remove('pausebutton');
   nightlightbutons.classList.add('lightmode1_button');
   nightlightbutons.classList.remove('nightmode1_button');
   var nightlightbutons2 = document.getElementById("nightbuts2");
   nightlightbutons2.classList.remove('pausebutton');
   nightlightbutons2.classList.add('lightmode1_button');
   nightlightbutons2.classList.remove('nightmode1_button');
    // buttoncolor.classList.add('nightmode1_button');
      // buttoncolor.classList.add('lightmode1_button');
       gridcolor.classList.remove('nightmode2_grid');
       gridcolor.classList.add('lightmode2_grid');
       gridcolor.classList.remove('nightmode2_grid');
        nightvalue = false;
      
     return;
     }
     else{
    console.log("nightmode");
    //var bodycolor = document.getElementById("body");
    var nightlightbutons = document.getElementById("nightbuts");
   bodycolor.classList.add('nightmode1_body');
   nightlightbutons.classList.remove('pausebutton');
   nightlightbutons.classList.remove('lightmode1_button');
   nightlightbutons.classList.add('nightmode1_button');
    var nightlightbutons2 = document.getElementById("nightbuts2");
  
   nightlightbutons2.classList.remove('pausebutton');
   nightlightbutons2.classList.remove('lightmode1_button');
   nightlightbutons2.classList.add('nightmode1_button');
     
    gridcolor.classList.remove('lightmode2_grid');
    gridcolor.classList.remove('grid1');
   
    gridcolor.classList.add('nightmode2_grid');
    nightvalue = true;
    return;
}
}

function pausefunction(){
    pausebuttonjs = true;
    var opac = document.getElementById("pop-up");
    opac.style.opacity=1;
    opac.classList.add('enable');
    var titlebar = document.getElementById("friends");
    titlebar.style.opacity=0;
}
function resumefunction(){
    var titlebar = document.getElementById("friends");
    titlebar.style.opacity=1;
    pausebuttonjs = false;
    var opac = document.getElementById("pop-up");
    opac.style.opacity=0;
    opac.classList.add('disable');
    
    
}
function settings(){
     speed= prompt("choose the speed loser 😈 " ,5);
}

function gotop(){
    console.log("up");
// console.log(inputdirection);
   
    inputdirection.x=0;
    inputdirection.y=-1;
    if(inputdirection = {x:0,y:-1}){
        if(musicplaying){bewafaaudio4k.play();
        }return
    }
  
}
function godown(){
    console.log("down");
    inputdirection.x=0;
    inputdirection.y=1;
    if(inputdirection = {x:0,y:1}){
       if(musicplaying){ bewafaaudio4k.play();
        }return
    }
  
}
function goleft(){
    console.log("left");
    inputdirection.x=-1;
    inputdirection.y=0;
    if(inputdirection = {x:-1,y:0}){
       if(musicplaying){ bewafaaudio4k.play();
        }return
    }
  
}
function goright(){
    console.log("right");
    inputdirection.x=1;
    inputdirection.y=0;
    if(inputdirection = {x:1,y:0}){
       if(musicplaying){ bewafaaudio4k.play();
        }return
    }
  
}
// sppeed
function main(ctime){
 
    window.requestAnimationFrame(main);
    if((ctime-pausetime)/1000 <1/speed){
        return;
    }
   // console.log(ctime);
    pausetime= ctime;
    gameengine();
}
// fnc for collide
function ifclash(snake){
    if(snake[0].x>=11||snake[0].x<=0||snake[0].y>=19||snake[0].y<=0){
         return true
    }
    for (let i = 1; i < snakearray.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    return false;
}

function gameengine(){
    if(pausebuttonjs){
        return;
    }
    
    if(snakearray[0].x===jsfood.x && snakearray[0].y === jsfood.y && musicplaying==true){
        fdsound.play();}
    //eat food
    if(snakearray[0].x===jsfood.x && snakearray[0].y === jsfood.y){
        
        score +=1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscorebox.innerHTML = "HiScore: " + hiscoreval;
        }
        scorebox.innerHTML ="score:"+ score;
      
        snakearray.unshift({x: snakearray[0].x + inputdirection.x ,y:  snakearray[0].y + inputdirection.y});
     
       let a = 2;
        let b = 9;
        jsfood = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}

    }

    for (let i = snakearray.length - 2; i>=0; i--) { 

        snakearray[i+1] = {...snakearray[i]};
     }
     snakearray[0].x += inputdirection.x;
     snakearray[0].y += inputdirection.y;
    
    //clash
    if (ifclash(snakearray) && musicplaying==true){
        lostsound.play();
        bewafaaudio4k.pause();
    }
    if (ifclash(snakearray)){
      
        score=0;
        scorebox.innerHTML ="score:"+ score;
      
        inputdirection ={x:0,y:0};
        snakearray =[{x:5, y:13}];
       
        alert("gameover loser");
    }
// run snake

//display snake 
//bewafaaudio4k.play();

grid.innerHTML = "";
snakearray.forEach((e, index)=>{
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if(index === 0)
    {
      
        snakeElement.classList.add('head');
    }
    else
    {
        snakeElement.classList.add('snakebody');
    }
    grid.appendChild(snakeElement);
});
 //food

 foodElement= document.createElement('div');
 foodElement.style.gridRowStart=jsfood.y;
 foodElement.style.gridColumnStart=jsfood.x;
 foodElement.classList.add('food');
 grid.appendChild(foodElement);

}
// loop for const anima
window.requestAnimationFrame(main);
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscorebox.innerHTML = "HiScore: " + hiscore;
}



window.addEventListener('keydown' , e =>{
    inputdirection = {x: 0, y: 1} // Start the game
    if(musicplaying){
    bewafaaudio4k.play();}
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputdirection.x = 0;
            inputdirection.y = -1;
            
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputdirection.x = 0;
            inputdirection.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputdirection.x = -1;
            inputdirection.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputdirection.x = 1;
            inputdirection.y = 0;
            break;
        default:
            break;
    }

});

