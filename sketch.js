
var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4; 
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,100,50,100);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5;
  movingRect = createSprite(200,350,100,50);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;

  /*gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green"; 
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green"; 
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
}*/
}
function draw() {
  background(0);  
  /*movingRect.x = mouseX;
  movingRect.y = mouseY;

  //console.log(movingRect.x - fixedRect.x);
  
  if(isTouching(movingRect, gameObject4)){
    gameObject4.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    gameObject4.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
*/
bounceOff(movingRect,fixedRect);

  drawSprites();

}



