var END=1;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var survivalTime=0;
var score=0;

function preload(){
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
   
createCanvas(500,500);  
  
monkey = createSprite(50,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;

bananaGroup = createGroup();
obstacleGroup = createGroup();  
}

function draw() {
 
background("lightgreen")  

ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;   
console.log(ground.x);
  
if(keyDown("space")&& monkey.y >= 300) {
monkey.velocityY = -12;
} 
monkey.velocityY = monkey.velocityY + 0.5;
monkey.collide(ground);
  
if(monkey.isTouching(obstacleGroup)){
gameState=END;  
  
bananaGroup.destroyEach();
obstacleGroup.destroyEach();  
bananaGroup.setVelocityXEach(0);
obstacleGroup.setVelocityXEach(0);
  
  
}  
    
food();
obstacle(); 
  
stroke("white");
textSize(20);
fill("white");
text("Score:"+score,500,50);  
  
drawSprites();
  
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("Survival Time:"+ survivalTime,100,50);  
}

function food()  {
if(frameCount%80 === 0){
var banana = createSprite(200,400,20,20);
banana.y = Math.round(random(150,200)); 
banana.addImage(bananaImage);
banana.scale = 0.1;
banana.velocityX = -4;
banana.lifetime = 600;
bananaGroup.add(banana);  
  
}  
   
}

function obstacle()  {
if(frameCount%300 === 0){
var stone = createSprite(200,330,20,20);
stone.y = Math.round(random(330,330)); 
stone.addImage(obstacleImage);
stone.scale = 0.1;
stone.velocityX = -4;
stone.lifetime = 600;
obstacleGroup.add(stone);  
  
}  
   
}