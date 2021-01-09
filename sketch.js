
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,leftBox,rightBox,downBox;

function preload(){

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(100,680,10);
	ground=new Ground(400,700,800,20);
	leftBox = new Box(width/2+100,height-65,20,100);
	rightBox = new Box(width/2+300,height-65,20,100);
	downBox = new Box(width/2+200,height-25,200,20);
	
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ball.display();
  ground.display();
 
  downBox.display();
  leftBox.display();
  rightBox.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});

	}
}



