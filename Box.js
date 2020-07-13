class Box {
  constructor(x, y, width, height) {
    //super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    var options = {
            'restitution':0.8,
            'friction':2.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.width = 30;
        this.height = 30;
        this.Visibility=255;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<5){
          var posX = this.body.positionX;
        var posY = this.body.positionY;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill(195,185,0);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(this.Visibility, this.body.position.x, this.body.position.y, 30, 30);
        pop();
        World.remove(world, this.body);
      }
      
      }
  

};
