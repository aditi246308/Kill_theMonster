class Monster {
    constructor(x,y,radius){

        var options = {
            density: 5,
            frictionAir: 0.1
        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(this.x,this.y,radius/2,options);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y-100);
        ellipseMode(RADIUS);
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();

    }
}