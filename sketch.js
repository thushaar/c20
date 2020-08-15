var mr,fr;

function setup() {
  createCanvas(1200,800);
 fr= createSprite(400,100, 50, 80);
fr.shapeColor="green";

mr=createSprite(400,800,80,30);
mr.shapeColor="green";






}

function draw() {
  background(0,0,0);  

mr.x=mouseX;
mr.y=mouseY;

if(mr.x - fr.x < fr.width/2 + mr.width/2 
  && fr.x - mr.x< fr.width/2+ mr.width/2 
  && mr.y- fr.y < fr.height/2 + mr. height/2
  && fr.y - mr.y < fr.height/2+ mr. height/2 )

{
  mr.shapeColor="red";
  fr.shapeColor="red";
}

else{
  mr.shapeColor="green";
  fr.shapeColor="green";
}

  drawSprites();
}