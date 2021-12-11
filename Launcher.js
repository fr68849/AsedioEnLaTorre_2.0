class Launcher
{ 
  constructor(polygonn, anchor){
  var options = {
  bodyA:polygonn,
  pointB: anchor, 
  stiffness: 0.04,
  length: 10
  }

  this.bodyA=polygonn
  this.pointB = anchor 
  this.launcher = Constraint.create(options);
  World.add(world, this.launcher); 
  }

  attach(body){
      this.launcher.bodyA=polygonn;
  }

  fly(){
  this.launcher.bodyA=null;
  }

  display(){ 

  if(this.launcher.bodyA){
  var pointA = this.bodyA.position;
  var pointB = this.pointB; 
  strokeWeight(4); 
  line(pointA.x, pointA.y, pointB.x, pointB.y);
  }

  } 
};

