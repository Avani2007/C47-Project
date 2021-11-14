class Spikeclass{
    constructor() {
        this.body = Bodies.circle(700,300,30);
       
        this.image = loadImage("images/spike.png");
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, 700, 300,70,60);
        pop();
      }
}