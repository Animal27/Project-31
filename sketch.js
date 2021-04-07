const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;

function setup() {
  createCanvas(480,800);
  ground1= new Ground(240,10,460,10);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("blue"); 
  
  
  ground1.display();
  drawSprites();
}