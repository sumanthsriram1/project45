
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var ground1, ground2, ground3;
var hero, bg
var heroImage
var ground
var platform
var gameState = "start"
var button

function preload()
{
	bgImage = loadImage("images/sunnyforest.jpg");
	heroImage = loadImage("images/stickman.png")
	heroJumpingImage = loadImage("images/stickmanjumping-removebg-preview.png")
	heroRunningImage = loadImage("images/stickmanrunning-removebg-preview.png")
	groundImage = loadImage("images/brickwall.jpg")
}

function setup() {
	createCanvas(800, 600);
	

	engine = Engine.create();
	world = engine.world;
	bg = createSprite(0,300,1000,600)
	bg.addImage("forest",bgImage)
	bg.velocityX = -4
	bg.scale = 2
	

	hero = createSprite(50,520,20,20)
	hero.addImage("hero",heroImage)
	hero.addImage("heroJumping",heroJumpingImage)
	hero.addImage("heroRunning",heroRunningImage)
	hero.scale = 0.35
	ground = createSprite(20,590,300,20)
	ground.visible = false
	Engine.run(engine);

	tutorialTitle = new Tutorial(400,300)
	
}


function draw() {
  background(255);
 
 if(gameState === "start"){
  tutorialTitle.display();
 }
 else if(gameState === "play"){
	image (bgImage, 400,350,800,700);
  
	if(keyDown('space')){
	  hero.velocityY = -10
	  hero.changeImage("heroJumping")
	}
	else{
	  hero.velocityY = hero.velocityY + 0.8
	  hero.changeImage("hero")
	}
	hero.collide(ground) 
	if(bg.x<200){
	  bg.x = bg.width/2
	}
  
	spawnPlatform()
	drawSprites();
 }
 
}

function spawnPlatform(){
	var platform = createSprite(100,500,300,20)
	platform.velocityX = -4
}

