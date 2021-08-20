class Ship {
  constructor() {
    this.size = 10;
    this.position = createVector(width / 2, height - this.size * 2);
    this.shipVertex1 = createVector(this.position.x, this.position.y-this.size);
    this.shipVertex2 = createVector(this.position.x-this.size, this.position.y+this.size);
    this.shipVertex3 = createVector(this.position.x+this.size, this.position.y+this.size);
    
    this.shipVertices = [this.shipVertex1, this.shipVertex2, this.shipVertex3];
    this.isGoingUp = false;
    this.isGoingDown = false;
    this.color = [9, 99, 98];
    
  }

  collision(debrisArray) {
    //collision with debris
    for (
      var debrisArrayIndex = 0;
      debrisArrayIndex < debrisPop;
     debrisArrayIndex++
    ) {
      
      if ( collideCirclePoly( debrisArray[debrisArrayIndex].position.x, debrisArray[debrisArrayIndex].position.y, debrisArray[debrisArrayIndex].size, this.shipVertices) ) {
        this.position = createVector(width / 2, height - this.size * 2);
      }
    }

    //collision with screen edge
    if (this.position.y > height) {
      this.position = createVector(width / 2, height - this.size * 2);
    } else if (this.position.y < 0) {
      this.position = createVector(width / 2, height - this.size * 2);
    }
  }

  update(debrisArray) {
    this.collision(debrisArray);
    if (this.isGoingUp == true) {
      this.position.y -= 5;
    }

    if (this.isGoingDown == true) {
      this.position.y += 5;
    }
    
    this.shipVertex1 = createVector(this.position.x, this.position.y-this.size);
    this.shipVertex2 = createVector(this.position.x-this.size, this.position.y+this.size);
    this.shipVertex3 = createVector(this.position.x+this.size, this.position.y+this.size);
     this.shipVertices = [this.shipVertex1, this.shipVertex2, this.shipVertex3];
    
  }

  display() {
    fill(this.color);
    noStroke();
    triangle(this.shipVertices[0].x, this.shipVertices[0].y, this.shipVertices[1].x, this.shipVertices[1].y, this.shipVertices[2].x, this.shipVertices[2].y);
  }
}
