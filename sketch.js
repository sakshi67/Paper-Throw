const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy,launcher,paper,dustbin;
var ground;


function preload(){
  bg= loadImage("sprites/bg.png");
  boy= loadImage("sprites/boy.png")

  
}
function setup() {
  createCanvas(2000,720);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground (800, 680, 1600, 50);
  
  paper = new Paper(150,660,70);

  dustbin = new Dustbin(1000,670,100,100)

  launcher = new SlingShot(paper.body, {x:310 , y:510});

}

function draw() {
  background(bg); 
  Engine.update(engine); 
  fill("silver")
  textSize(30);
  text("Press Space to get a Second Chance to Play!!",50,50);

  image(boy,250,430,300,300)

  ground.display();
  paper.display();
  dustbin.display();
  
  launcher.display();

 
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(paper.body, {x:235, y:420})
		launcher.attach(paper.body);
	}
}
