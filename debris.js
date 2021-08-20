class Debris{
  
  constructor(){
    this.position = createVector( random(windowWidth), random(windowHeight-(windowHeight/10) ) );
    this.velocity = createVector(random(3), 0);
    this.size = random(10, 20);
    this.color = [171, 140, 163];
  }
  
  collision(){
    if(this.position.x > width){
      this.position.x = 0;
    }
    else if (this.position.x < 0){
      this.position.x = width;
    }
  }
  
  update(){
    this.collision();
    this.position.add(this.velocity);
  }
  
  display(){
    push();
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
    pop();
  }
}