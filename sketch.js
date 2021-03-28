const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,520,80,80);
    box2 = new Box(1000,520,80,80);
    pig1 = new Pig(900,560,80,80);
    ground = new Ground(600,height,1200,20)
    log1 = new Log(900, 470, 280, 20, PI)
    box3 = new Box(800,450,80,80);
    box4 = new Box(1000,450,80,80);
    pig2 = new Pig(900,430,80,80);
    log2 = new Log(900, 390, 280, 20, PI)
    box5 = new Box(900, 370, 80, 80)
    log3 = new Log(880, 330, 170, 20, -PI/5)
    log4 = new Log(950, 330, 170, 20, PI/5)
    bird1 = new Bird(mouseX, mouseY, 80, 80)
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    pig1.display();
    ground.display();
    box2.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}