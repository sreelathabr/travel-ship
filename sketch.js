var sea,ship1,ship2,ship3,ship4





function preload(){
  seaImg = loadImage("sea.png");
 
  

}

function setup(){
  createCanvas(400,400);
  sea = createsprite(200,200,40,40);
  sea.addImage(seaImage);
  
}

function draw() {
  background("blue");
 
}