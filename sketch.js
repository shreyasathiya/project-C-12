var runner;
var runner_running
var path1;
var path2;
var invisibleWall1;
var invisibleWall2;
var path1_image;
var path2_image;

function preload(){
runner_running = loadAnimation("Runner-1.png", "Runner-2.png")
path1_image = loadImage("path.png");
path2_image = loadImage("path.png");
}

function setup(){
  createCanvas(1600,800);
  //create sprites here
 path1=createSprite(1350,400,20,400);
 path1.addImage("path1", path1_image); 
 path1.velocityY=7;

 path2=createSprite(200,400,20,400);
 path2.addImage("path2", path2_image); 
 path2.velocityY=7;

 runner=createSprite(1350,600,20,20);
 runner.addAnimation("running",runner_running);
 runner.scale=0.1

 invisibleWall1=createSprite(100,600,10,400);
 invisibleWall1.visible=false

 invisibleWall2=createSprite(1450,600,10,400);
 invisibleWall2.visible=false

}


function draw() {
  background("black");

  if (path1.y > 500) {
    path1.x = 1350;
    path1.y = 400;
  }

  if (path2.y > 500) {
    path2.x = 200;
    path2.y = 400;
  }

  if(keyDown("right")){
   runner.velocityX=70;
  }

  if(keyDown("left")){
    runner.velocityX=-70;
   }

   runner.collide(invisibleWall1);
   runner.collide(invisibleWall2);

 drawSprites();
}
