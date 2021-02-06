class Elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 5,
            stiffness : 0.02
        }
        this.pointB = pointB;
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }

    attach(body){
        this.elastic.bodyA = body;
    }

    fly(){
        this.elastic.bodyA = null;
    }

    display(){
        if(this.elastic.bodyA){
            var pointA = this.elastic.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke("lightblue");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}