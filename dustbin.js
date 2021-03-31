class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height
    }
    display(){
        push();
      rectMode(CENTER);
      translate(this.body.position.x, this.body.position.y);
      rect(0,0,this.width,this.height);
        pop();
    }
}