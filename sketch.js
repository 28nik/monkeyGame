var survivalTime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var gameState = 1;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 400);
  
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation( "moving", monkey_running);
  monkey.scale=0.1;
  monkey.debug = true;
  // monkey.setCollider();
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = 5;
  
   
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();  
  
  
}


function draw() {
  background(250);
  ground.x = ground.width /2;
  if (gameState === 1) {
    createfood();
  stoneObstacles();
  
  time = Math.ceil(frameCount/frameRate());
  
      
      
  survivalTime = time;
    monkey.velocityY = monkey.velocityY + 0.5;
  
  
  if(keyDown("space")&& monkey.y>300) {
      monkey.velocityY = -15;
    }
  } else if (gameState === 0){
    FoodGroup.setVelocityXEach(0);
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);
    ground.velocityX = 0;
  }
  
  monkey.collide(ground);
  
  if (monkey.isTouching(obstaclesGroup)){
    gameState = 0;
  }

stroke("white")
textSize(20);
fill("white");
stroke("black");
textSize(20);
fill("black");
// survivalTime=Math.ceil(frameCount/frameRate())

  
text("Survival Time: "+ survivalTime, 100,50);
  
  
  drawSprites();
  
}

function createfood() {
  if (frameCount%80 === 0){
  banana = createSprite(500, 100, 0, 0);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  rand = Math.round(random(120, 200));
  banana.y = rand;
    banana.lifetime = 150;
    banana.debug = true;
    banana.setCollider("circle", 0,0,225);
    FoodGroup.add(banana);
  }
}


function stoneObstacles() {
  if (frameCount%300 === 0){
    stone = createSprite(500, 332, 0, 0);
    stone.addImage(obstaceImage);
    stone.scale = 0.1;
    stone.velocityX = -3;
    stone.lifetime = 200;
    stone.lifetime = 150;
    stone.debug = true;
    stone.setCollider("circle", 0,0,225);
    obstaclesGroup.add(stone);
  }
}