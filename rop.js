class Box {
   constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
   
  }
  display(){
    fill("orange");
   // var angle = this.body.position;
   // rect(angle.x,angle.y,this.width,this.height)
   
    if(this.body.speed < 6){
     var angle = this.body.position;
    rect(angle.x,angle.y,this.width,this.height);
    //fill("orange");
    }else{
      if (this.body.speed>6 ){
        this.body.speed = 0;
        fill("#99BD91");
       score=score+10;
      }
     World.remove(world,this.body);
    // this.body.speed = 0;
     
     
   }
   
   
    }
     /* score(){
      if(this.body.speed < 6 && this.body.speed > -105){
      score=score+10;
      }
    }*/
  }


