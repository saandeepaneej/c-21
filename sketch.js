var fixedrect,movingrect
function setup() {
  createCanvas(1200,800);
 fixedrect= createSprite(200, 200, 50, 80);
 fixedrect.shapeColor="green"
 movingrect= createSprite(400, 200, 80, 30);
movingrect.shapeColor="green"

gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor="green";

gameObject2 = createSprite(200,100,50,50);
gameObject2.shapeColor="green";

gameObject3 = createSprite(300,100,50,50);
gameObject3.shapeColor="green";

gameObject4 = createSprite(400,100,50,50);
gameObject4.shapeColor="green";

movingrect.velocityY = -5;
fixedrect.velocityY = +5;

}

function draw() {
  background(0);  


  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(isTouching(movingrect,gameObject2))
  {
    gameObject2.shapeColor="blue" 
    movingrect.shapeColor="blue"
  }
  else{
    gameObject2.shapeColor="green" 
    movingrect.shapeColor="green"
  }
  
 bounceOff(movingrect,fixedrect);
  drawSprites();
}
