class Ground {
    constructor(x,y,w,h){
        var ground_options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,ground_options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    showGround(){
        push ();
        rectMode(CENTER);
        fill ("green");
        rect(this.body.position.x,this.body.position.y, this.w, this.h);
        pop ();
    }
}