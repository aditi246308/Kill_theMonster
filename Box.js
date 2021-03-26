class Box {
    constructor(x,y,width,height){

        var options = {
            restitution: 0.8,
            density: 20,
            friction: 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        fill("orange");
        strokeWeight(3);
        stroke("black");
        rotate(angle);
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}