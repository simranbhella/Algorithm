var movingRect, fixedRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=2;
  movingRect=createSprite(200,200,80,30);
  movingRect.shapeColor="green";
  movingRect.velocityY=-2;

object1 = createSprite(100,100,50,50); 
object1.shapeColor="green"
object2 = createSprite(200,100,50,50);
object2.shapeColor="green"
object3 = createSprite(300,100,50,50);
object3.shapeColor="green"
object4 = createSprite(400,100,50,50);
object4.shapeColor="green"
}

function draw() {
  background("black");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

if(isTouching(object1,movingRect))
{
  object1.shapeColor="red";
  movingRect.shapeColor="red";
}
else {
  object1.shapeColor="green";
  movingRect.shapeColor="green";
}

bounceOff(movingRect,fixedRect)


edges=createEdgeSprites();
movingRect.bounceOff(edges);
fixedRect.bounceOff(edges);
  drawSprites();
}

function isTouching(obj1,obj2)
{
  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2
    && obj2.x-obj1.x<obj2.width/2+obj1.width/2
    && obj1.y-obj2.y<obj2.height/2+obj1.height/2
    && obj2.y-obj1.y<obj2.height/2+obj1.height/2)
    {
    return true;
  }
  else {
    return false;
  }
}

function bounceOff(obj1,obj2)
{
  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2
    && obj2.x-obj1.x<obj2.width/2+obj1.width/2){
  obj1.velocityX=obj1.velocityX*(-1);
  obj2.velocityX=obj2.velocityX*(-1);
  }
  if(obj1.y-obj2.y<obj2.height/2+obj1.height/2
    && obj2.y-obj1.y<obj2.height/2+obj1.height/2){
      obj2.velocityY=obj2.velocityY*(-1);
      obj1.velocityY=obj1.velocityY*(-1);
    }
}