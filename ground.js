class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(400,490,800,20,options);
    }
    display(){
      rectMode(CENTER);
      rect(400,490,800,20);
    }
  }