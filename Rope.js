class Rope {
    constructor(bodyA,pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.9,
            length: 450
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }

    attach(body){
       this.rope.bodyA = body; 
    }

    /*fly(){
        this.rope.bodyA = null;
    }*/

    display(){
        if(this.rope.bodyA){
            var A = this.rope.bodyA.position;
            var B = this.pointB;
            push();
            stroke("black");
            strokeWeight(0);
            line(A.x,A.y,B.x,B.y);
            pop();
        }
    }
}