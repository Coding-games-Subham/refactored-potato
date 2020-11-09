class Bird  {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 50,50, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("a.jpg");
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,80,60 );
  }
}


