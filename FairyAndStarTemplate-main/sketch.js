  var fairy,fairyimg
  var backgroundImg
  var star,starimg


function preload()
{

  fairyimg = loadImage("images/fairy1.png")

  starimg = loadImage("images/star.png")

  backgroundImg = loadImage("images/starnight.png")
   //preload the images here
}

function setup() {
  createCanvas(800, 750);
  
 star = createSprite(random(100,700),50,10,10)
 star.addImage(starimg)
 star.scale = .25

fairy = createSprite(100,600,10,10)
fairy.addImage(fairyimg)
fairy.scale = 0.25

}


function draw() {
  background(backgroundImg);

  if(keyDown(DOWN_ARROW)){
star.velocityY = 5
  }

  if(keyDown(LEFT_ARROW)){
    fairy.x = fairy.x - 5 
   }

  if(keyDown(RIGHT_ARROW)){
    fairy.x = fairy.x + 5
  }

  if(star.y>575){
    star.velocityY = 0
    fairy.x = star.x - 125
  }
  


  drawSprites()
}
