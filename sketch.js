const Bodies =Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var ground;
var engine,world;
var ball;

function setup() {
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

 var ground_options={
    isStatic : true
 }
 var ball_options={
   restitution : 1.0
   
 }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
 
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER); 
  fill("green");
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x,ball.position.y,20,20);
}