class Player{
  constructor(selector){
	this.obj = document.querySelector(selector);
	this.moveStrength = 0.2;
    this.jumpStrength = 25;
    this.impulse = null;
    this.moving = false;
    this.jumping = false;
    this.dx = 0; this.dy = 0; this.dz = 0;
    this.pressed = [];
	this.obj.setAttribute("static-body");
	
	 window.addEventListener("keyup",(e)=>{
      delete this.pressed[e.key];
      if(e.key == "ArrowUp" || e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == "ArrowDown" || 
         e.key == "w" || e.key == "a" || e.key == "s" || e.key == "d"){
        this.moving = true;
      }
    });
    window.addEventListener("keydown",(e)=>{
      this.pressed[e.key] = true; 
      console.log(this.pressed)
    })
	window.addEventListener("spacebar",(e)=>{
      this.jumping[e.key] = true; 
      console.log(this.jumping)
	  
    })
  }