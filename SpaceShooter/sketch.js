var spaceShip,enemyShip;
var spaceShipImg,enemyShipImg;
var b1,b2,b3,b4;



function preload(){
  //1. loading the animation 
  spaceShipImg=loadImage("assets/SpaceShip.png")
  enemyShipImg=loadImage("assets/enemyShip.png")
  bg=loadImage("assets/bg3.jpeg")
  laser=loadImage("assets/laser.png")
}


function setup(){
  createCanvas(800,600);

  spaceShip=createSprite(100,300,20,20);
  spaceShip.addImage("ship",spaceShipImg)
  spaceShip.scale=0.2;


  enemyShip=createSprite(700,300,20,20);
  enemyShip.addImage("ship2",enemyShipImg);
  enemyShip.scale=0.9;
  enemyShip.velocityY=-3;

  //boundaries
  b1=createSprite(400,5,800,10);
  b1.visible=false;
  b2=createSprite(400,600,800,10);
  b2.visible=false;
}

function draw(){
  background(bg);

  if(keyDown("up")){
    spaceShip.y=spaceShip.y-4;
  }

  if(keyDown("down")){
    spaceShip.y=spaceShip.y+4;
  }

  if(keyDown("space")){
    
  }

  if(spaceShip.isTouching(b1) || spaceShip.isTouching(b2)){
    spaceShip.bounceOff(b1)
    spaceShip.bounceOff(b2)
  }
  
  if(enemyShip.isTouching(b1) || enemyShip.isTouching(b2)){
    enemyShip.bounceOff(b1)
    enemyShip.bounceOff(b2)
  }

  drawSprites();
}