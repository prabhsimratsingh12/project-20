var car,car2,car3,car4,wall,wall2,wall3,wall4;
var invisibleline;





function setup() {
  createCanvas(800,300);

  car=createSprite(50,50,10,10);
  wall=createSprite(700,50,10,height/7);
  car.velocityX = 2;
  
  car2=createSprite(50,100,10,10);
  wall2=createSprite(700,100,10,height/7);
  car2.velocityX = 2;

  car3=createSprite(50,150,10,10);
  wall3=createSprite(700,150,10,height/7);
  car3.velocityX = 2;

  car4=createSprite(50,200,10,10);
  wall4=createSprite(700,200,10,height/7);
  car4.velocityX = 2;
  
  invisibleline=createSprite(710,70,10,height/1)
  invisibleline.visible=false;

}

function draw() {
  background("black");

  car.collide(invisibleline);
  car2.collide(invisibleline);
  car3.collide(invisibleline);
  car4.collide(invisibleline);


if(istouching()){
    car.shapeColor = "red";
    wall.shapeColor = "red";

    car2.shapeColor = "red";
    wall2.shapeColor = "red";

    car3.shapeColor = "red";
    wall3.shapeColor = "red";

    car4.shapeColor = "red";
    wall4.shapeColor = "red";
  }
  else {
    car.shapeColor = "green";
    wall.shapeColor = "green";

    car2.shapeColor = "green";
    wall2.shapeColor = "green";

    car3.shapeColor = "green";
    wall3.shapeColor = "green";

    car4.shapeColor = "green";
    wall4.shapeColor = "green";
  }


  istouching(car2,wall2,car3,wall3,car4,wall4);
  drawSprites();
}

function istouching(car2,wall2,car3,wall3,car4,wall4){

  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    &&car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
     return true;
    }
    else {
     return false;
    }

}