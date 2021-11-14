class Starclass{
    constructor() {
        this.body = Bodies.circle(400, 440, 30);
        
        this.image = loadImage("images/star.png");
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, 400,440,72, 72);
        pop();
      }
}