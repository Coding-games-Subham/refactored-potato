
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
function setup() {
  canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(400,800,800,60);
 ground2=new Ground(450,580,400,20);
 ground3=new Ground(580,270,300,20);

 box1=new Box(290,525,40,60);
 box2=new Box(330,525,40,60);
 box3=new Box(370,525,40,60);
 box4=new Box(410,525,40,60);
 box5=new Box(450,525,40,60);
 box6=new Box(490,525,40,60);
 box7=new Box(530,525,40,60);
 box8=new Box(570,525,40,60);
 box9=new Box(610,525,40,60);
 box10=new Box(305,465,40,60);
 box11=new Box(345,465,40,60);
 box12=new Box(385,465,40,60);
 box13=new Box(425,465,40,60);
 box14=new Box(465,465,40,60);
 box15=new Box(505,465,40,60);
 box16=new Box(545,465,40,60);
 box17=new Box(585,465,40,60);
 box18=new Box(520,355,40,60);
 box19=new Box(360,355,40,60);

 box20=new Box(510,215,40,60);
 box21=new Box(550,215,40,60);
 box22=new Box(590,215,40,60);
 box23=new Box(640,215,40,60);
 box24=new Box(680,215,40,60);
 box25=new Box(540,160,40,60);
 box26=new Box(580,160,40,60);

 box27=new Box(620,160,40,60);
 box28=new Box(660,160,40,60);

 //box29=new Box(555,100,30,60);
 box30=new Box(595,100,40,60);
 //box31=new Box(635,100,30,60);

// box32=new Box(580,160,30,60);
// box33=new Box(580,160,30,60);

 //box34=new Box(580,160,30,60);

 bird = new Bird(40,670);

 chain1 = new chain(bird.body,{x:100,y:655})
}

function draw() {
  background("#99BD91");
  Engine.update(engine);
  textSize(20)
  text("x :" + mouseX,30,30);
  text("y :" + mouseY,100,20);
  text("score : " + score,470,30)

  bird.display();

  ground.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();  
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  //box29.score();
  box30.display();
  //box31.score();
 // box32.score();
 // box33.score();
  //box34.score();

  /*box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();  
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  //box29.display();
  box30.score();*/

  chain1.display();
  //console.log(box18.position.y)
  
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
  chain1.attach(bird.body);
}