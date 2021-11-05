var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200, 200, 10, 10)
}

function draw() 
{
  background(180);
  if(keyIsDown(LEFT_ARROW)) {
    ball.velocityX = -5;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    ball.velocityX = 5;
  }
  if(keyIsDown(UP_ARROW)) {
    ball.velocityY = -5;
  }
  if(keyIsDown(DOWN_ARROW)) {
    ball.velocityY = 5;
  }
  drawSprites();
}




