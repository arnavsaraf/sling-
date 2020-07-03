const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground1;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  console.log (engine);
  ground1 = new Ground (390,240,10,200);
  box1 = new Box (330,235,30,40);
  box2 = new Box (360,235,30,40);
  box3 = new Box (390,235,30,40);
  box4 = new Box (420,235,30,40);
  box5 = new Box (450,235,30,40);
  box6 = new Box (360,195,30,40);
  box7 = new Box (390,195,30,40);
  box8 = new Box (420,195,30,40);
  box9 = new Box (390,155,30,40);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}