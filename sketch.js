const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var base;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10;
var box11,box12;
var box13;
var polygon,polygonSpr,polyImg;
var rubber;
var score=0;

function preload(){
    polyImg = loadImage('polygon.png');
}

function setup(){
    createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;
    
    polygonSpr = createSprite(0,0,10,10);
    polygonSpr.addImage(polyImg);
    polygonSpr.scale=0.13;

    ground = new Ground(500,590,1000,15);
    base = new Ground(740,400,250,10);

    //ground floor
    box1 = new Box(660,375,30,40);
    box2 = new Box(690,375,30,40);
    box3 = new Box(720,375,30,40);
    box4 = new Box(750,375,30,40);
    box5 = new Box(780,375,30,40);
    box6 = new Box(810,375,30,40);
    //1st floor
    box7 = new Box(690,335,30,40);
    box8 = new Box(720,335,30,40);
    box9 = new Box(750,335,30,40);
    box10 = new Box(780,335,30,40);
    //2nd floor
    box11 = new Box(720,295,30,40);
    box12 = new Box(750,295,30,40);
    //top floor
    box13 = new Box(735,240,30,40);

    polygon = new Polygon(200,300,50,50);
    rubber = new Elastic(polygon.body,{x:200,y:300})

    Engine.run(engine);
}

function draw(){
    background(0);

    fill('white');
    textSize(30);
    text("Score : "+score,15,30);

    ground.display();
    base.display();
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

    box1.score();
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

    rubber.display();

    polygonSpr.x = polygon.body.position.x;
    polygonSpr.y = polygon.body.position.y;

    drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    rubber.fly();
}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(polygon.body, {x: 200 , y: 300});
        rubber.attach(polygon.body);
    }
}