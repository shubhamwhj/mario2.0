
function preload()
{
 
}

function setup() {
  createCanvas(7346, 668);

  var countDistanceX = 0;
  var platform;
  var gap;
  console.log(countDistanceX);
  for (var i=0;i<14;i++)
	 {
      platform = new Platform(countDistanceX);
      gap=random([0,0,0,0,80]);
      countDistanceX = countDistanceX + platform.rw + gap; 
      console.log(countDistanceX);
     }
 
}

function draw() {
  background('skyblue');  
  drawSprites();
}



