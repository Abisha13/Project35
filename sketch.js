var balloon;
var database;
var position

function preload(){
backgroundImage= loadImage("Hot Air Ballon-01.png")
balloonImage= loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
balloonIMG= loadImage("Hot Air Ballon-02.png")
}
function setup() {
  createCanvas(800,400);
  database= firebase.database();

 
  balloon= createSprite(100,200,40,40)
  balloon.addAnimation("balloon",balloonImage)
  balloon.scale=0.4
  var balloonPosition= database.ref('balloon/position')
  balloonPosition.on("value",readPosition, showError)
}

function draw() {
  background(backgroundImage); 
 
   if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
    updateHeight(-10,0)
  } 
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
    updateHeight(10,0)
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
   updateHeight(0,+10)
   balloon.addAnimation("balloon",balloonImage)
   balloon.scale=balloon.scale+0.01
  }
  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
    updateHeight(0,-10)
    balloon.addAnimation("balloon",balloonImage)
    balloon.scale=balloon.scale-0.01
  }
  console.log(balloon.x)
  console.log(balloon.y)
  drawSprites();

}
function updateHeight(x,y){
database.ref('balloon/position').set({
})
}
function readPosition(data){
  position=data.val();
  balloon2.x = position.x;
  balloon2.y= position.y;
}
function showError(){
  console.log("An error in writing the database")
}