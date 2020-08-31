var thickness, wall;
var speed, weight, bullet;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100, 200, 50, 10);
  bullet.shapeColor = color(230, 230, 0);
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(230, 230, 0);
  

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22, 83);
  
}


function draw() {
  background(80,80,80); 

  bullet.velocityX = 10;

  
    if (hasCollided(bullet, wall)) {
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
      if (damage > 10){
        bullet.shapeColor = color(0, 255, 0);
      }
      if (damage < 10){
        bullet.shapeColor = color(255, 0, 0);
      }
  
    }
  
  
  
  
   
  drawSprites();
}

function hasCollided(lbullet, lwall)
{

   bulletRightEdge = lbullet.x + 70;
   wallLeftEdge = lwall.x;
   if (bulletRightEdge >= wallLeftEdge){
     return true;
   }
   else {
    return false;
   }
   
}

