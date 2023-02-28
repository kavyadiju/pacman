var pacman1,packman2,packman3,pacman4,pacmanDie,packman,wall;
var ghost1,ghost1Img,ghost2,ghost2Img,ghost3,ghost3Img,ghost4,ghost4Img,ghost5,ghost5Img;
var sugardotImg;
var allWalls=[];
var allSugarDots=[];
var walls,sugarDots;
var score=0;
let ghosts = [];
let ghostNum = 4;

var gameState="serve";
walls=[
      //4 walls
       {x: 520/2, y:5, w:520, h:10},//0
      {x: 520/2, y:395,w:520, h:10},//1
      {x: 5, y:200, w:10, h:520},//2
      {x: 515, y:200, w:10, h:520},//3
      
      //center Ts
      {x: 260, y:30, w:20, h:50}, //4 
      {x: 260, y:82, w:130, h:20},//5
          
      {x: 260, y:240, w:130, h:20},//6
      {x: 260, y:265, w:20, h:50},//7
      {x: 260, y:120, w:20, h:50},  //8   
      {x: 260, y:320, w:130, h:20},//9
      {x: 260, y:350, w:20, h:50},//10
      
      //center square
      {x: 205, y:200, w:20, h:60},//11
      {x: 315, y:200, w:20, h:60}, //12  
      {x: 225, y:180, w:50, h:20},//13
      {x: 295, y:180, w:50, h:20}, //14 
      
      //left and right parallel sprites
      {x: 55, y:170, w:120, h:40},//15  
      {x: 55, y:230, w:120, h:40},//16 
      {x: 450, y:170, w:120, h:40},//17  
      {x: 450, y:230, w:120, h:40},//18  
      
      //2 squares & top row
         {x: 60, y:60, w:65, h:65},//19
         {x: 460, y:60, w:65, h:65},//20       
        {x: 145, y:60, w:65, h:65},//21
        {x: 375, y:60, w:65, h:65}, //22
        {x: 175, y:37, w:120, h:20},//23      
        {x: 345, y:37, w:120, h:20},//24      
      
     //2nd row
       {x: 60, y:120, w:60, h:20}, //25  
      {x: 460, y:120, w:60, h:20}, //26
      {x: 170, y:120, w:130, h:20}, //27
      {x: 345, y:120, w:125, h:20}, //28
    
   //middle row
    {x: 355, y:155, w:20, h:75}, //29 
    {x: 155, y:155, w:20, h:75}, //30    
     {x: 355, y:232, w:20, h:40}, //31
    {x: 155, y:232, w:20, h:40}, //32 
      
   //lower row1
   { x: 60, y:280, w:60, h:20}, //33   
  { x: 170, y:280, w:120, h:20},//34 
  { x: 460, y:280, w:60, h:20}, //35   
  { x: 350, y:280, w:120, h:20}, //36
     
  //lower row 3
    { x: 10, y:325, w:60, h:20}, //37
    { x: 80, y:300, w:20, h:50},
    { x: 160, y:340, w:20, h:50},
  
    { x: 440, y:300, w:20, h:50},
    { x: 425, y:320, w:50, h:20},
    { x: 100, y:325, w:60, h:20}, 
      
  //bottom row
  { x: 390, y:365, w:200, h:20},
  { x: 360, y:344, w:20, h:60},
  { x: 130, y:365, w:200, h:20},
 
  ]  
 
sugarDots= [
//row1
      {x: 25, y:20}, 
      {x: 45, y:20},
      {x: 65, y:20},
      {x: 85, y:20},
      {x: 105, y:20},
      {x: 125, y:20}, 
      {x: 145, y:20},
      {x: 165, y:20},
      {x: 185, y:20},
      {x: 205, y:20},
      {x: 225, y:20}, 
      
      {x: 285, y:20},
      {x: 305, y:20},
      {x: 325, y:20}, 
      {x: 345, y:20},
      {x: 365, y:20},
      {x: 385, y:20},
      {x: 405, y:20},
      {x: 425, y:20}, 
      {x: 445, y:20},
      {x: 465, y:20},
      {x: 485, y:20},
    
//1st coloumn set
      {x: 20, y:40},
      {x: 20, y:60},
      {x: 20, y:80},
      {x: 20, y:120},
      {x: 420, y:120},
      {x: 105, y:40},
      {x: 105, y:60},
      {x: 105, y:80}, 
      {x: 500, y:40},
      {x: 500, y:60},
      {x: 500, y:80},
      {x: 500, y:100},
      {x: 500, y:120},
      {x: 500, y:140},
      {x: 500, y:20},
      {x: 186, y:60},
      {x: 186, y:80},  
      {x: 336, y:80},
      {x: 420, y:40},
      {x: 420, y:60},
      {x: 420, y:80},
      {x: 204, y:60},
      {x: 224, y:60},
      {x: 244, y:60},
      {x: 264, y:60},
      {x: 284, y:60},
      {x: 304, y:60},
      {x: 324, y:60},
    
// 2nd column set
    
    {x:130,y:160},
    {x:180,y:160},
    {x:200,y:160},
    {x:220,y:160},
    {x:240,y:160},    
    {x:240,y:160},
    {x:280,y:160},
    {x:300,y:160},
    {x:320,y:160},
    {x:340,y:160},
    {x:380,y:160},
    {x:130,y:180}, 
    {x:180,y:180},
    {x:380,y:180},
    {x:260,y:160},
    {x:260,y:180},
    {x:240,y:220},
    {x:260,y:220},
    {x:280,y:220},
    {x:335,y:220},
    {x:335,y:240},
    {x:375,y:220},
    {x:375,y:240},
//3rd column set
    {x:130,y:220},
    {x:130,y:240},
    {x:180,y:220},
    {x:180,y:240},
    
    {x:420,y:280},
    {x:280,y:280},
    {x:240,y:280}, 
    {x:100,y:280},
    {x:20,y:280},
    {x:500,y:280},
    
    {x:50,y:320},
    {x:140,y:320},
    {x:180,y:320}, 
    {x:340,y:320}, 
    {x:380,y:320},  
    {x:460,y:320},
    {x:480,y:320},
    {x:500,y:320},
    
    {x:20,y:365},
    {x:240,y:365},
    {x:280,y:365},
    {x:500,y:345},
    {x:500,y:365},
    {x:500,y:385},
    {x:500,y:300},
    {x:500,y:260},
    {x:500,y:200},
 //row2
      {x: 25, y:102}, 
      {x: 45, y:102},
      {x: 65, y:102},
      {x: 85, y:102},
      {x: 105, y:102},
      {x: 125, y:102}, 
      {x: 145, y:102},
      {x: 165, y:102},
      {x: 185, y:102},
      {x: 205, y:102},
      {x: 225, y:102}, 
      
      
      {x: 285, y:102},
      {x: 305, y:102},
      {x: 325, y:102}, 
      {x: 345, y:102},
      {x: 365, y:102},
      {x: 385, y:102},
      {x: 405, y:102},
      {x: 425, y:102}, 
      {x: 445, y:102},
      {x: 465, y:102},
      {x: 485, y:102},
  
      //row3
      {x: 25, y:142}, 
      {x: 45, y:142},
      {x: 65, y:142},
      {x: 85, y:142},
      {x: 105, y:142},
      {x: 125, y:142},     
      {x: 185, y:142},
      {x: 205, y:142},
      {x: 225, y:142}, 
           
      {x: 285, y:142},
      {x: 305, y:142},
      {x: 325, y:142},    
      {x: 385, y:142},
      {x: 405, y:142},
      {x: 425, y:142}, 
      {x: 445, y:142},
      {x: 465, y:142},
      {x: 485, y:142},
    
      
      //row4
      {x: 25, y:200}, 
      {x: 45, y:200},
      {x: 65, y:200},
      {x: 85, y:200},
      {x: 105, y:200},
      {x: 125, y:200}, 
      {x: 145, y:200},
      {x: 165, y:200},
      {x: 185, y:200},
     
      {x: 225, y:200}, 
      {x: 245, y:200}, 
      {x: 265, y:200},    
      {x: 285, y:200},
 
      {x: 345, y:200},
      {x: 365, y:200},    
      {x: 385, y:200},
      {x: 405, y:200},
      {x: 425, y:200}, 
      {x: 445, y:200},
      {x: 465, y:200},
      {x: 485, y:200},
       

      //row5
      {x: 25, y:260}, 
      {x: 45, y:260},
      {x: 65, y:260},
      {x: 85, y:260},
      {x: 105, y:260},
      {x: 125, y:260}, 
      {x: 145, y:260},
      {x: 165, y:260},
      {x: 185, y:260},
      {x: 205, y:260},
      {x: 225, y:260}, 
      
      
      {x: 285, y:260},
      {x: 305, y:260},
      {x: 325, y:260}, 
      {x: 345, y:260},
      {x: 365, y:260},
      {x: 385, y:260},
      {x: 405, y:260},
      {x: 425, y:260}, 
      {x: 445, y:260},
      {x: 465, y:260},
      {x: 485, y:260},   
      
      //row6
      {x: 25, y:300}, 
      {x: 45, y:300},
      {x: 105, y:300},
      {x: 125, y:300}, 
      {x: 145, y:300},
      {x: 165, y:300},
      {x: 185, y:300},
      {x: 205, y:300},
      {x: 225, y:300}, 
      {x: 245, y:300},      
      {x: 265, y:300},
    
      {x: 285, y:300},
      {x: 305, y:300},
      {x: 325, y:300}, 
      {x: 345, y:300},
      {x: 365, y:300},
      {x: 385, y:300},
      {x: 405, y:300},
     
      {x: 465, y:300},
      {x: 485, y:300}, 
//row7
      {x: 25, y:345}, 
      {x: 45, y:345},
      {x: 65, y:345},
      {x: 85, y:345},
      {x: 105, y:345},
      {x: 125, y:345},   
      {x: 185, y:345},
      {x: 205, y:345},
      {x: 225, y:345},    
      {x: 285, y:345},
      {x: 305, y:345},
      {x: 325, y:345},     
      {x: 385, y:345},
      {x: 405, y:345},
      {x: 425, y:345}, 
      {x: 445, y:345},
      {x: 465, y:345},
      {x: 485, y:345},
//row7
      {x: 25, y:382}, 
      {x: 45, y:382},
      {x: 65, y:382},
      {x: 85, y:382},
      {x: 105, y:382},
      {x: 125, y:382}, 
      {x: 145, y:382},
      {x: 165, y:382}, 
      {x: 185, y:382},
      {x: 205, y:382},
      {x: 225, y:382}, 
      {x: 245, y:382},
      {x: 265, y:382}, 
      {x: 285, y:382},
      {x: 305, y:382},
      {x: 325, y:382},  
      {x: 345, y:382},
      {x: 365, y:382},  
      {x: 385, y:382},
      {x: 405, y:382},
      {x: 425, y:382}, 
      {x: 445, y:382},
      {x: 465, y:382},
      {x: 485, y:382},
  

  ] 
function preload(){
    sugardotImg=loadImage("sugarDots.png");
    packman1=loadAnimation("0.png","1.png","2.png");
    packman2=loadAnimation("29.png","30.png","31.png");  
    packman3=loadAnimation("32.png","3.png","2.png");  
    packman4=loadAnimation("34.png","35.png","2.png"); 
    pacmanDie=loadAnimation("11.png");  
    ghost1Img=loadImage("44.png");
    ghost2Img=loadImage("56.png");
    ghost3Img=loadImage("74.png");
    ghost4Img=loadImage("86.png");
    ghost5Img=loadImage("52.png");
}
function setup() {
  createCanvas(520,400);
    
  pacman=createSprite(80,height/2,10,10);
  pacman.addAnimation("right",packman1);
  pacman.addAnimation("left",packman2);
  pacman.addAnimation("up",packman3);
  pacman.addAnimation("down",packman4);
  pacman.addAnimation("die",pacmanDie)
    

  for(var i in walls)
      {
          var wall=createSprite(walls[i].x,walls[i].y,walls[i].w,walls[i].h);
          wall.shapeColor="#404040";
       allWalls.push(wall);
          
      }
   for(var j in sugarDots)
      {
          var sugarDot=createSprite(sugarDots[j].x,sugarDots[j].y);
          sugarDot.addImage(sugardotImg);
        sugarDot.scale=0.03;
          allSugarDots.push(sugarDot);
          
      }   
    
  ghost1=createSprite(width/2,height/2,30,30);
  ghost1.addImage(ghost1Img);
    
  ghost2=createSprite(width/2-30,height/2,30,30);
  ghost2.addImage(ghost2Img);
    
  ghost3=createSprite(width/2+30,height/2,30,30);
  ghost3.addImage(ghost3Img);
    
  ghost4=createSprite(width/2,height/2+20,30,30);
  ghost4.addImage(ghost4Img);
     
}

function draw() {
 
  background(0);
 
  for(var i in allWalls){
   pacman.collide(allWalls[i]);
  }
  for(var k in allSugarDots){  
 if(pacman.collide(allSugarDots[k]))
     {
      allSugarDots[k].destroy();    
  score=score+1;   
     }
 

  }
    if(gameState=="play"){
       playerControls() ;
         enemyMovement();
    }
    
    if(pacman.isTouching(ghost1) ||
      pacman.isTouching(ghost2)||
      pacman.isTouching(ghost3)||
      pacman.isTouching(ghost4))
        {
            gameState="end";
            pacman.changeAnimation("die")
            setTimeout(()=>{
                pacman.destroy();
            },500);
        }
    if(gameState=="end" || gameState=="win"){
        ghost1.velocityX=0;
        ghost2.velocityX=0;
        ghost3.velocityX=0;
        ghost4.velocityX=0;
        
        ghost1.velocityY=0;
        ghost2.velocityY=0;
        ghost3.velocityY=0;
        ghost4.velocityY=0;
    }
    if(score===245){
        gameState="win";
    }
    drawSprites();
    showMessage();
}

function showMessage(){
    if(gameState==="serve")
        {
            textSize(30);
            stroke("blue");
            strokeWeight(5);
            fill("yellow");
            text("PRESS ANY KEY TO START",60,200)
        }
    if(gameState!=="serve"){
            textSize(20);
            stroke("blue");
            strokeWeight(5);
            fill("yellow");
            text("SCORE :"+score,360,50) 
    }
    if(gameState=="end"){
            textSize(40);
            stroke("blue");
            strokeWeight(5);
            fill("yellow");
            text("GAME OVER!!",160,220) 
    }
    if(gameState=="win"){
            textSize(40);
            stroke("blue");
            strokeWeight(5);
            fill("yellow");
            text("YOU WON!!",160,220) 
    }
}

function keyPressed(){
     if(gameState==="serve"){
              gameState="play";
          setTimeout(
      ()=>{
          ghost1.velocityY=-5;
      },2000) 
        setTimeout(
      ()=>{
          ghost2.velocityX=5;
      },1000) 
            setTimeout(
      ()=>{
          ghost2.velocityY=-5;
        ghost2.velocityX=0;
      },1200) 
     setTimeout(
      ()=>{
          ghost3.velocityX=-5;
      },2000) 
            setTimeout(
      ()=>{
          ghost3.velocityY=-5;
        ghost3.velocityX=0;
      },2200) 
     setTimeout(
      ()=>{
          ghost4.velocityY=-5;
      },3000) 
          
          }
}
function playerControls(){
      
  if(keyDown("right"))
      {
    pacman.changeAnimation("right");
          pacman.x+=5;
      }
     if(keyDown("left"))
      {
          pacman.changeAnimation("left");
          pacman.x-=5;
      }
     if(keyDown("up"))
      {
           
          pacman.changeAnimation("up");
          pacman.y-=5;
      }
     if(keyDown("down"))
      {
          pacman.changeAnimation("down");
          pacman.y+=5;
      }
    
}

function enemyMovement()
{
    if(ghost1.collide(allWalls[4])||
     ghost1.collide(allWalls[23])||
     ghost1.collide(allWalls[29])||
     ghost1.collide(allWalls[41])||
     ghost1.collide(allWalls[40])||
     ghost1.collide(allWalls[13])||
    ghost1.collide(allWalls[34])||
     ghost1.collide(allWalls[9])||
     ghost1.collide(allWalls[16]))
     {
       ghost1.velocityX=-5;
      ghost1.velocityY=0;
     }     
if(ghost1.collide(allWalls[45])||
     ghost1.collide(allWalls[8])||
     ghost1.collide(allWalls[2])||
     ghost1.collide(allWalls[12])
      )
     {
       ghost1.velocityX=5;
      ghost1.velocityY=0;
     } 
     
   if(ghost1.collide(allWalls[0])||
     ghost1.collide(allWalls[34])||
     ghost1.collide(allWalls[28])||
     ghost1.collide(allWalls[24])||
     ghost1.collide(allWalls[6])||
     ghost1.collide(allWalls[25])||
     ghost1.collide(allWalls[7])||
     ghost1.collide(allWalls[37])||
     ghost1.collide(allWalls[30]))
     {
       ghost1.velocityY=5;
      ghost1.velocityX=0;
     }  
     if(ghost1.collide(allWalls[1])||
     ghost1.collide(allWalls[16])||
     ghost1.collide(allWalls[31])||
     ghost1.collide(allWalls[22])||
     ghost1.collide(allWalls[11])||
     ghost1.collide(allWalls[41])||
     ghost1.collide(allWalls[23])||
     ghost1.collide(allWalls[3])||
     ghost1.collide(allWalls[10])||
     ghost1.collide(allWalls[38])
     )
     {
       ghost1.velocityY=-5;
      ghost1.velocityX=0;
     }
//GHOST2
    if(
     ghost2.collide(allWalls[4])||
     ghost2.collide(allWalls[23])||
     ghost2.collide(allWalls[41])||
     ghost2.collide(allWalls[40])||
     ghost2.collide(allWalls[13])||
     ghost2.collide(allWalls[9])||
     ghost2.collide(allWalls[16])||
    ghost2.collide(allWalls[1])
    )
     {
       ghost2.velocityX=-5;
      ghost2.velocityY=0;
     }     
if(ghost2.collide(allWalls[45])||
     ghost2.collide(allWalls[8])||
     ghost2.collide(allWalls[12])||
     ghost2.collide(allWalls[36])||
     ghost2.collide(allWalls[37])||
     ghost2.collide(allWalls[34]))
      
     {
       ghost2.velocityX=5;
      ghost2.velocityY=0;
     } 
     
   if(ghost2.collide(allWalls[0])||
     ghost2.collide(allWalls[28])||
     ghost2.collide(allWalls[24])||
     ghost2.collide(allWalls[6])||
     ghost2.collide(allWalls[25])||
     ghost2.collide(allWalls[7])||
     ghost2.collide(allWalls[30])||
     ghost2.collide(allWalls[29])||
     ghost2.collide(allWalls[3]))
     
     {
       ghost2.velocityY=5;
      ghost2.velocityX=0;
     }  
     if(
     ghost2.collide(allWalls[16])||
     ghost2.collide(allWalls[31])||
     ghost2.collide(allWalls[22])||
     ghost2.collide(allWalls[11])||
     ghost2.collide(allWalls[41])||
     ghost2.collide(allWalls[23])||
     ghost2.collide(allWalls[10])||
     ghost2.collide(allWalls[38])||
    ghost2.collide(allWalls[39])
     )
     {
       ghost2.velocityY=-5;
      ghost2.velocityX=0;
     }
    if(  ghost2.collide(allWalls[2]))
        {
            if(ghost2.y>350)
                {
            ghost2.velocityY=-5;
      ghost2.velocityX=0; 
                }
            else{
            ghost2.velocityY=0;
      ghost2.velocityX=5;
            }
        }
//GHOST3
    if(
     ghost3.collide(allWalls[4])||
     ghost3.collide(allWalls[23])||
     ghost3.collide(allWalls[13])||
     ghost3.collide(allWalls[16])||
    ghost3.collide(allWalls[1])||
     ghost3.collide(allWalls[8])
    )
     {
       ghost3.velocityX=-5;
      ghost3.velocityY=0;
     }     
if(ghost3.collide(allWalls[45])||
     ghost3.collide(allWalls[12])||
     ghost3.collide(allWalls[36])||
     ghost3.collide(allWalls[37])||
     ghost3.collide(allWalls[34])||
     ghost3.collide(allWalls[9])||
     ghost3.collide(allWalls[18]))
      
     {
       ghost3.velocityX=5;
      ghost3.velocityY=0;
     } 
     
   if(ghost3.collide(allWalls[0])||
     ghost3.collide(allWalls[28])||
     ghost3.collide(allWalls[24])||
     ghost3.collide(allWalls[6])||
     ghost3.collide(allWalls[25])||
     ghost3.collide(allWalls[7])||
     ghost3.collide(allWalls[30])||
     ghost3.collide(allWalls[29])||
     ghost3.collide(allWalls[3]))
     
     {
       ghost3.velocityY=5;
      ghost3.velocityX=0;
     }  
     if(
     ghost3.collide(allWalls[16])||
     ghost3.collide(allWalls[31])||
     ghost3.collide(allWalls[22])||
     ghost3.collide(allWalls[11])||
     ghost3.collide(allWalls[41])||
     ghost3.collide(allWalls[23])||
     ghost3.collide(allWalls[10])||
     ghost3.collide(allWalls[38])||
    ghost3.collide(allWalls[39])||
     ghost3.collide(allWalls[40])
     )
     {
       ghost3.velocityY=-5;
      ghost3.velocityX=0;
     }
    if(  ghost3.collide(allWalls[2]))
        {
            if(ghost3.y>350)
                {
            ghost3.velocityY=-5;
      ghost3.velocityX=0; 
                }
            else{
            ghost3.velocityY=0;
      ghost3.velocityX=5;
            }
        }
//GHOST4
    if(ghost4.collide(allWalls[0])||
     ghost4.collide(allWalls[23])||
     ghost4.collide(allWalls[13])||
     ghost4.collide(allWalls[16])||
    ghost4.collide(allWalls[1])||
     ghost4.collide(allWalls[8])||
     ghost4.collide(allWalls[18])||
     ghost4.collide(allWalls[5])||
       ghost4.collide(allWalls[27])
    )
     {
       ghost4.velocityX=-5;
      ghost4.velocityY=0;
     }     
if(ghost4.collide(allWalls[45])||
     ghost4.collide(allWalls[12])||
     ghost4.collide(allWalls[36])||
     ghost4.collide(allWalls[37])||
     ghost4.collide(allWalls[34])||
     ghost4.collide(allWalls[9])||
     ghost4.collide(allWalls[28]))
      
     {
       ghost4.velocityX=5;
      ghost4.velocityY=0;
     } 
     
   if(
     ghost4.collide(allWalls[24])||
     ghost4.collide(allWalls[25])||
     ghost4.collide(allWalls[7])||
     ghost4.collide(allWalls[30])||
    ghost4.collide(allWalls[4])||
     ghost4.collide(allWalls[29])||
     ghost4.collide(allWalls[3])||
       ghost4.collide(allWalls[21])
   )
     
     {
       ghost4.velocityY=5;
      ghost4.velocityX=0;
     }  
     if(
     ghost4.collide(allWalls[16])||
     ghost4.collide(allWalls[31])||
     ghost4.collide(allWalls[22])||
     ghost4.collide(allWalls[11])||
     ghost4.collide(allWalls[41])||
     ghost4.collide(allWalls[23])||
     ghost4.collide(allWalls[10])||
     ghost4.collide(allWalls[38])||
    ghost4.collide(allWalls[39])||
     ghost4.collide(allWalls[40])|
         ghost4.collide(allWalls[17])
     )
     {
       ghost4.velocityY=-5;
      ghost4.velocityX=0;
     }
    if(  ghost4.collide(allWalls[2]))
        {
            if(ghost4.y>350)
                {
            ghost4.velocityY=-5;
      ghost4.velocityX=0; 
                }
            else{
            ghost4.velocityY=0;
      ghost4.velocityX=5;
            }
        }
    if(ghost4.x==380 && ghost.y==260)
                {
            ghost4.velocityY=-5;
      ghost4.velocityX=0; 
                }
            
}

