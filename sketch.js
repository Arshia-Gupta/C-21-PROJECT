var ball,groundObj,leftSide,rightSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 var ball_options={
		isStatic:false,
		friction:0,
		density:0.5,
		restitution:0.3
	}
	ball=Matter.Bodies.circle(20,10,40,ball_options);
	World.add(world,ball);
	Engine.run(engine);
groundObj=new Ground(400,600,800,30);
leftSide=new Ground(500,550,20,120);
rightSide=new Ground(700,550,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  rightSide.display();
  leftSide.display();
  ellipse(ball.position.x,ball.position.y,60,60);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:100,y:-100});
	
}
}

