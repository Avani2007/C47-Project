 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []
var rand;

var divisionHeight=300;
var score =0;

var particle;
var spike1;
var star1;

var turn = 0;
var maxTurns = 5;

var gameState = "play"
var moana, bomb1;

function preload(){
 // bomb1 = loadImage("bomb.png")
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

//rand = random

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 55; j <=width+2; j=j+75) 
    {
    
       plinkos.push(new Plinko(j,90));
    }

    for (var j = 25; j <=width-8; j=j+75) 
    {
    
       plinkos.push(new Plinko(j,160));
    }

     for (var j = 55; j <=width+2; j=j+75) 
    {
    
       plinkos.push(new Plinko(j,230));
    }

     for (var j = 25; j <=width-8; j=j+75) 
    {
    
       plinkos.push(new Plinko(j,300));
    }

    for (var j = 55; j <=width+2; j=j+75) 
    {
    
       plinkos.push(new Plinko(j,370));
    }
    
    for (var j = 25; j <=width-8; j=j+75) 
    {
    
       plinkos.push(new Plinko(j,440));
    }


    spike1 = new Spikeclass();
    star1 = new Starclass();

    
}
 


function draw() {
  background("cyan");
 
  Engine.update(engine);
 
  textSize(35)
  text("Score : "+score,20,45);
  fill("white");
  text(" 800 ", 5, 550);
  text(" 600 ", 80, 550);
  text(" 400 ", 160, 550);
  text(" 200 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 200 ", 480, 550);
  text(" 400 ", 560, 550);
  text(" 600 ", 640, 550);
  text(" 800 ", 720, 550);
  
  ground.display();

  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
  }

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 80) 
             {
                 score=score+800;      
                 particle=null;
                 if ( turn>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 160 && particle.body.position.x > 81 ) 
             {
                   score = score + 600;
                   particle=null;
                   if ( turn>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 240 && particle.body.position.x > 161 )
             {
                   score = score + 400;
                   particle=null;
                   if ( turn>= 5)  gameState ="end";

             }    
             else if (particle.body.position.x < 320 && particle.body.position.x > 241 )
             {
                   score = score + 200;
                   particle=null;
                   if ( turn>= 5)  gameState ="end";

             }    
             else if (particle.body.position.x < 400 && particle.body.position.x > 321 )
             {
                   score = score + 100;
                   particle=null;
                   if ( turn>= 5)  gameState ="end";

             }    
             else if (particle.body.position.x < 480 && particle.body.position.x > 401 )
             {
                   score = score + 100;
                   particle=null;
                   if ( turn>= 5)  gameState ="end";

             }      
             else if (particle.body.position.x < 560 && particle.body.position.x > 481 )
             {
                   score = score + 200;
                   particle=null;
                   if ( turn>= 5)  gameState ="end";

             }
              else if (particle.body.position.x < 640 && particle.body.position.x > 561 )
             {
                   score = score + 400;
                   particle=null;
                   if ( turn>= 5)  gameState ="end";

             }    
             else if (particle.body.position.x < 720 && particle.body.position.x > 641 )
             {
                   score = score + 600;
                   particle=null;
                   if ( turn>= 5)  gameState ="end";

             }    
             else if (particle.body.position.x < 800 && particle.body.position.x > 721 )
             {
                   score = score + 800;
                   particle=null;
                   if ( turn>= 5)  gameState ="end";

             }    
       }
      }

  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


   spike1.display();
   star1.display();

      if (particle!=undefined){
      if (particle.body.position.x<730 && particle.body.position.x>670 && particle.body.position.y<330 && particle.body.position.y>270){
            score = score-10
      }
   }
   if (particle!=undefined){
      if (particle.body.position.x<430 && particle.body.position.x>370 && particle.body.position.y<470 && particle.body.position.y>410){
            score = score+10
      }
   }
}

function mousePressed(){
  if (gameState!=="end"){
    turn++
    particle = new Particle(mouseX,10,10,10)
  }
}