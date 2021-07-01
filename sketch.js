
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0
  
function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x=ground.width/2
  console.log(ground.x)
  
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
   background(255)
    
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyWentDown("space")) 
    {
      monkey.velocityY = -12
    }
  monkey.velocityY = monkey.velocityY+0.8
  
  monkey.collide(ground);
    
  
stroke("white");
  textSize(20)
  fill("white")
  
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 100, 50)
  
  Banana();
  Obstacle();
  
  drawSprites();
}
function Banana() {
  if(frameCount%80===0)
    {
  banana = createSprite(320,200,10,10)
  banana.addImage(bananaImage)
  banana.y = random(120,200)
  banana.scale = 0.1
  banana.velocityX = -5
  FoodGroup.add(banana)
  monkey.depth = banana.depth + 1
  banana.lifetime = 300
}
}

function Obstacle() {
  if(frameCount%100===0)
    {
  obstacle = createSprite(390,330,10,10)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
  obstacle.velocityX=-6
  obstacleGroup.add(obstacle)
  obstacle.lifetime = 300
}
}





