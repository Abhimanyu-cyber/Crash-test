var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500))

}

function draw() {
  background(0);

  car.velocityX=speed;
  if(car.x-wall.x>car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500

    if(deformation<100){
      car.shapeColor="green";
      textSize(32);
      fill("green");
      text("SAFE",800,200);
    }
    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
      textSize(32);
      fill("yellow");
      text("MODERATE",800,200);
    }
    if(deformation>180){
      car.shapeColor="red";
      textSize(32);
      fill("red");
      text("LETHAL",800,200);
    }
  }

  drawSprites();
}