class CannonBall {
  constructor(x, y) {
    var options = {
     //add resistution 
      isStatic: true
    };
//add circle to the body

  this.body=Bodies.circle(x,y,40,options);
  World.add(world, this.body);
//loadImage
    this.img=loadImage("assets/cannonball.png");
  }

  //add shoot function 
  shoot() {
   var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    //call the image function
   image(this.img,0,0,40,40);
    pop();
   
    }
}
