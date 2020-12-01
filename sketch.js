
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score=0;
var time=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 foodGroup=new Group();
 obstacleGroup=new Group();
}



function setup() {
  createCanvas(600, 400);
  
  monkey=createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400, 350, 900, 10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
}


function draw() {
  background("orange");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("SCORE:"+score, 500, 50);
  
  stroke("white");
  textSize(20);
  fill("black");
  time=Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME:"+time, 100, 50);
  
  if(ground.x < 0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  banana();
  obstacles();
  drawSprites();
  
}
function banana(){
  if(frameCount%80==0){
    var banana=createSprite(600, 40);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=120;
    foodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount%300==0){
    var obstacles=createSprite(600, 310)
    obstacles.addImage(obstacleImage);
    obstacles.scale=0.2;
    obstacles.velocityX=-5;
    obstacles.lifetime=120;
    obstacleGroup.add(obstacles);
  }
}




