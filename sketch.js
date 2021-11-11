var snake;
var fruit;

function preload(){

}

function setup(){
createCanvas(600,600);
snake = createSprite(300,300,80,10);
snake.shapeColor = "green";
}


function draw(){
background("black");
if(keyIsDown(RIGHT_ARROW)){
  snake.x = snake.x+2;
  snake.rotation = 0;
}
if(keyIsDown(LEFT_ARROW)){
  snake.x = snake.x-2;
  snake.rotation = 0;
}
if(keyIsDown(UP_ARROW)){
  snake.y = snake.y-2;
  snake.rotation = 90;
}
if(keyIsDown(DOWN_ARROW)){
  snake.y = snake.y+2;
  snake.rotation = 90;
}




drawSprites();
}
