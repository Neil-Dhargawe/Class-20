var fixedRect, movingRect,fixedRect1,fixedRect2,fixedRect3,fixedRect4,fixedRect5;

var arg1,arg2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect1 = createSprite(600, 300, 50, 80);
  fixedRect1.shapeColor = "cyan";
  fixedRect1.debug = true;
  fixedRect2 = createSprite(600, 500, 50, 80);
  fixedRect2.shapeColor = "blue";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(200, 200, 50, 80);
  fixedRect3.shapeColor = "purple";
  fixedRect3.debug = true;
  fixedRect4 = createSprite(200, 300, 50, 80);
  fixedRect4.shapeColor = "pink";
  fixedRect4.debug = true;
  fixedRect5 = createSprite(200,400, 50, 80);
  fixedRect5.shapeColor = "brown";
  fixedRect5.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
   } 
  else
  {
    movingRect.shapeColor = "lightblue";
    fixedRect.shapeColor = "lightblue";

  }
  if(isTouching(movingRect,fixedRect1))
  {
    movingRect.shapeColor = "purple";
    fixedRect1.shapeColor = "purple";
   } 
  else
  {
    movingRect.shapeColor = "pink";
    fixedRect1.shapeColor = "pink";

  }
  if(isTouching(movingRect,fixedRect2))
  {
    movingRect.shapeColor = "yellow";
    fixedRect2.shapeColor = "yellow";
   } 
  else
  {
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";

  }if(isTouching(movingRect,fixedRect3))
  {
    movingRect.shapeColor = "red";
    fixedRect3.shapeColor = "red";
   } 
  else
  {
    movingRect.shapeColor = "purple";
    fixedRect3.shapeColor = "purple";

  }
  if(isTouching(movingRect,fixedRect4))
  {
    movingRect.shapeColor = "blue";
    fixedRect4.shapeColor = "blue";
   } 
  else
  {
    movingRect.shapeColor = "pink";
    fixedRect4.shapeColor = "pink";

  }
  if(isTouching(movingRect,fixedRect5))
  {
    movingRect.shapeColor = "grey";
    fixedRect5.shapeColor = "grey";
   } 
  else
  {
    movingRect.shapeColor = "brown";
    fixedRect5.shapeColor = "brown";

  }
    // called

  drawSprites();
}

function isTouching(arg1,arg2)
{
  if (arg1.x - arg2.x < arg1.width/2 + arg2.width/2 && arg2.x - arg1.x < arg2.width/2 + arg1.width/2 
    && arg1.y - arg2.y < arg2.width/2 + arg1.width/2 && arg2.y - arg1.y < arg2.width/2 + arg1.width/2)
    
        {
     return true;
    }
    else {
      return false;
    }
    
}