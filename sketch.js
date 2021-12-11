const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2,stand3;
var ball;
var launcherObject;
var polygonn,polygon_img;
function preload(){
  polygon_img=loadImage("polygonn.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(750,180,170,10);
  stand3 = new Stand(800,370,150,10);
 
  //nivel uno
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);

//SEGUNDA PLATAFORMA DE BLOQUES

//NIVEL 1
block17 = new Block(690,155,30,40);
block18 = new Block(718,155,30,40);
block19 = new Block(745,155,30,40);
block20 = new Block(775,155,30,40);
block21 = new Block(800,155,30,40);

//NIVEL 2
block22 = new Block(718,115,30,40);
block23 = new Block(745,115,30,40);
block24 = new Block(775,115,30,40);

//NIVEL 3 
block25 = new Block(745,75,30,40);

//TERCERA PLATAFORMA DE BLOQUES 
//NIVEL 1
block26 = new Block(753,345,30,40);
block27 = new Block(779,345,30,40);
block28 = new Block(810,345,30,40);
block29 = new Block(840,345,30,40);

//NIVEL 2
block30 = new Block(779,304,30,40);
block31 = new Block(810,304,30,40);

//NIVEL 3
block32 = new Block(780,264,30,40);

polygonn = Bodies.circle(50,200,50);
World.add(world,polygonn);

launcherObject = new Launcher(this.polygonn,{x:150,y:200});

}
function draw() {
  background(56,44,44); 

  textSize(20);
  fill("lightyellow");

  imageMode(CENTER);
  image(polygon_img,polygonn.position.x,polygonn.position.y,40,40);
  

  launcherObject.display();
  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
 

  
  strokeWeight(2);
  stroke(15);
  fill("darkblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("blue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("lightblue");
  block13.display();
  block14.display();
  block15.display();
  fill("white");
  block16.display();

  //SEGUNDA PLATAFORMA
  //NIVEL 1
  strokeWeight(2);
  fill("fuchsia");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //NIVEL 2
  strokeWeight(2);
  fill("pink");
  block22.display();
  block23.display();
  block24.display();

  //NIVEL 3
  strokeWeight(2);
  fill("white");
  block25.display();
 
  //TERCERA PLATAFORMA DE BLOQUES
  //NIVEL 1
  strokeWeight(2);
  fill("purple");
  block26.display();
  block27.display();
  block28.display();
  block29.display();

  //NIVEL 2
  strokeWeight(2);
  fill("violet");
  block30.display();
  block31.display();

  //NIVEL 3
  strokeWeight(2);
  fill("white");
  block32.display();
 
}
polygonn.display();

function mouseDragged(){
  Matter.Body.setPosition(polygonn,{x:mouseX, y:mouseY});
}   

function mouseReleased(){
launcherObject.fly();
  }

  function keyPressed(){
    if(keyCode===32)
    launcherObject.attach(polygonn.body);
    
    }
    
 
  
   
    

    

