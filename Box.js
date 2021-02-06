class Box {
    constructor(x,y,width,height) {
        var options = {
            isStatic: false
        }
        this.visiblity = 225;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
     display(){
        if(this.body.speed<3){
            var angle = this.body.angle;
            push();
            fill('lightgreen');
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rect(0 , 0, this.width, this.height);
            pop();
        }else{
            World.remove(world,this.body);
            push();
            this.visiblity = this.visiblity-5;
            tint(255,this.Visiblity);
            pop();
        }
     }

     score(){
        if(this.visiblity<0 && this.visiblity>-105){
            score++;
        }
     }
}