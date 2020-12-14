const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var division = [];

var divisionHeigth = 300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height, width, 20);

  
  for (var k = 0; k <= width; k += 80) {
    division.push(new Division(k, height-divisionHeigth/2, 10, divisionHeigth))
  }

  for (var j = 40; j <= width; j+= 50) {
    plinkos.push(new Plinko(j, 85, 10))
  }
  for (var j = 15; j <= width - 10; j+= 50) {
    plinkos.push(new Plinko(j, 185, 10))
  }
  for (var j = 40; j <= width; j+= 50) {
    plinkos.push(new Plinko(j, 285, 10))
  }
  for (var j = 15; j <= width - 10; j+= 50) {
    plinkos.push(new Plinko(j, 385, 10))
  }

  
  
  
}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();
  
  
  division[0].display();
  division[1].display();
  division[2].display();
  division[3].display();
  division[4].display();
  division[5].display();
  division[6].display();

  
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  
  if (frameCount % 90 == 0) {
    for (var j = 0; j <= 10; j++) {
      particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 8))
    }
  }

  
  for (var j = 0; j < particles.length; j++) 
  {
    particles[j].display();
  }
  
}
