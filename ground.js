class Ground{
    constructor(x,y,width,height){
      let options={
        isStatic:true
      }
     this.w=width;
     this.h=height;
      this.body=Matter.Bodies.rectangle(x, y, width, height,options);
      World.add(world, this.body)
    }
    display(){
      var pos=this.body.position
      push();
      fill("yellow");
      stroke("red");
      strokeWeight(4);
      rect(pos.x,pos.y,this.w,this.h);
      pop();
    }
  }
  