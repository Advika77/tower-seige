var polygon,slingShot,circle,Matter,bodies,world,polygon_image,position



function setup() {
  createCanvas(800,400);
  createSprite(350, 200, 10, 100);
  const Bodies = World.Bodies;
}

function draw() {
  background(255,255,255);  

World.add=(world,polygon);

imageMode(CENTER)
Image(polygon_image,polygon.position.x,polygon.position.y,40,40);
  drawSprites();
}