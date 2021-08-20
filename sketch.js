var debrisArray = [];
var debrisPop = 40;

var shipArray = [];
var shipPop = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (var debrisArrayIndex = 0; debrisArrayIndex < debrisPop; debrisArrayIndex++){
    debrisArray.push(new Debris());
  }
  
    for (var shipArrayIndex = 0; shipArrayIndex < shipPop; shipArrayIndex++){
    shipArray.push(new Ship());
  }
  
}

function keyPressed(){
  for(var shipArrayIndex = 0; shipArrayIndex < shipPop; shipArrayIndex++){
      if (keyCode == UP_ARROW){
        shipArray[shipArrayIndex].isGoingUp = true;
      }
      
      if (keyCode == DOWN_ARROW){
        shipArray[shipArrayIndex].isGoingDown = true;
      }
  }
}

function keyReleased(){
  for(var shipArrayIndex = 0; shipArrayIndex < shipPop; shipArrayIndex++){
      if (keyCode == UP_ARROW){
        shipArray[shipArrayIndex].isGoingUp = false;
      }
      
      if (keyCode == DOWN_ARROW){
        shipArray[shipArrayIndex].isGoingDown = false;
      }
  }
}

function draw() {
  background(53, 62, 92);
  debrisArray.forEach(debris => debris.update());
  debrisArray.forEach(debris => debris.display());
  shipArray.forEach(ship => ship.update(debrisArray));
  shipArray.forEach(ship => ship.display());
}