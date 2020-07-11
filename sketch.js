const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2;
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    

   
   
  
    box1 = new Box(200,100,50,50);
box2 = new Box(200,150,50,100);
ground = new Ground(200,390,400,20);
}

function draw(){
    background("white");
    Engine.update(engine);
   // rectMode(CENTER);
   

    //ellipseMode(RADIUS);
box1.display();
box2.display();
ground.display();
}