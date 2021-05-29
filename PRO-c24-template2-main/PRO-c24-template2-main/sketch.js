const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron1;
var stone1;
var rubber1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
iron1 = new iron(750,450,50,50)
stone1 = new stone(850,550,50,50)
    rubber1 = new Rubber(800,500,50)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber1.display()
    plane.display();
    hammer.display();
iron1.display()
stone1.display()
    
 
}