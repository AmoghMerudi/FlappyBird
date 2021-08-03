/*const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine, world;*/
var bgImage;
var bird, birdImage;
var pillar1, pillar2, pillar3, pillar4, pillar5, pillar6, pillar7, pillar8, pillar9, pillar10;
var pillarGroup;
var edges;
var score;
var gameState; 

function preload(){
  bgImage = loadImage("images/bg.jpeg");
  birdImage = loadImage("images/bird.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight-74);

  score = 0;

  bird = createSprite(170,330,20,20);
  bird.addImage(birdImage);
  //World.add(world, bird);
  bird.velocityY = 1;
  bird.scale = 0.2;

    pillar1 = createSprite(630,100,50,350);
    pillar1.velocityX = -1;
    pillar1.shapeColor = "green";
    pillar2 = createSprite(630,600,50,380);
    pillar2.velocityX = -1;
    pillar2.shapeColor = "green";

    pillar3 = createSprite(755,150,50,350);
    pillar3.velocityX = -1;
    pillar3.shapeColor = "green";
    pillar4 = createSprite(755,650,50,350);
    pillar4.velocityX = -1;
    pillar4.shapeColor = "green";

    pillar5 = createSprite(880,200,50,400);
    pillar5.velocityX = -1;
    pillar5.shapeColor = "green";
    pillar6 = createSprite(880,700,50,350);
    pillar6.velocityX = -1;
    pillar6.shapeColor = "green";

    pillar7 = createSprite(1005,180,50,370);
    pillar7.velocityX = -1;
    pillar7.shapeColor = "green";
    pillar8 = createSprite(1005,680,50,350);
    pillar8.velocityX = -1;
    pillar8.shapeColor = "green";

    pillar9 = createSprite(1130,60,50,350);
    pillar9.velocityX = -1;
    pillar9.shapeColor = "green";
    pillar10 = createSprite(1130,590,50,390);
    pillar10.velocityX = -1;
    pillar10.shapeColor = "green";

}

function draw() {
  
  background(bgImage);

  textSize(30);
  text("Score: " + score, 1300, 50);

  if(keyDown(UP_ARROW) || keyDown(32)){
    bird.y = bird.y-2;

    score = Math.round(score + frameCount/400);
  }

edges = createEdgeSprites();

  if(bird.isTouching(pillar1) || bird.isTouching(pillar2) || bird.isTouching(pillar3) || bird.isTouching(pillar4) || bird.isTouching(pillar5) || 
  bird.isTouching(pillar6) || bird.isTouching(pillar7) || bird.isTouching(pillar8) || bird.isTouching(pillar9) || bird.isTouching(pillar10)){
    
    text("Game Over", displayWidth/2, displayHeight/2);
    text("Press R to Restart the Game", displayWidth/2-80, displayHeight/2+40);

    pillar1.velocityX = 0;
    pillar2.velocityX = 0;
    pillar3.velocityX = 0;
    pillar4.velocityX = 0;
    pillar5.velocityX = 0;
    pillar6.velocityX = 0;
    pillar7.velocityX = 0;
    pillar8.velocityX = 0;
    pillar9.velocityX = 0;
    pillar10.velocityX = 0;

    bird.velocityX = 0;
    bird.velocityY = 0;    
  }

  if(pillar1.x === 0){
    pillar1.x = 630;
    pillar1.y = 100;
    pillar1.velocityX = -1;
  }

  if(pillar2.x === 0){
    pillar2.x = 630;
    pillar2.y = 600;
    pillar2.velocityX = -1;
  }

  if(pillar3.x === 0){
    pillar3.x = 630;
    pillar3.y = 150;
    pillar3.velocityX = -1;
  }

  if(pillar4.x === 0){
    pillar4.x = 630;
    pillar4.y = 650;
    pillar4.velocityX = -1
  }

  if(pillar5.x === 0){
    pillar5.x = 630;
    pillar5.y = 200;
    pillar5.velocityX = -1;
  }

  if(pillar6.x === 0){
    pillar6.x = 630;
    pillar6.y = 700;
    pillar6.velocityX = -1;
  }

  if(pillar7.x === 0){
    pillar7.x = 630;
    pillar7.y = 180;
    pillar7.velocityX = -1;
  }

  if(pillar8.x === 0){
    pillar8.x = 630;
    pillar8.y = 680;
    pillar8.velocityX = -1;
  }

  if(pillar9.x === 0){
    pillar9.x = 630;
    pillar9.y = 60;
    pillar9.velocityX = -1;
  }

  if(pillar10.x === 0){
    pillar10.x = 630;
    pillar10.y = 590;
    pillar10.velocityX = -1;
  }

  if(keyDown("r")){
    play();
  }
    
  drawSprites();
}

function play(){
    pillar1.velocityX = -1;
    pillar2.velocityX = -1;
    pillar3.velocityX = -1;
    pillar4.velocityX = -1;
    pillar5.velocityX = -1;
    pillar6.velocityX = -1;
    pillar7.velocityX = -1;
    pillar8.velocityX = -1;
    pillar9.velocityX = -1;
    pillar10.velocityX = -1;

    bird.velocityY = 1;
}