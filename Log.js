class Log
{
  
    constructor(x,y,height,angle)
    {
        var options=
        {
            restitution:0.8,
             density:1.0,
              friction: 1.0
        }
        this.body=Bodies.rectangle(x,y,25,height,options);
        this.width=25;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        World.add(myworld,this.body);
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        angleMode(RADIANS);

        push();

        translate(pos.x,pos.y);
        rotate(angle);
        console.log(angle);
        rectMode(CENTER);

        strokeWeight(2);
        stroke("green");
        fill(255);

        rect(0,0,this.width,this.height)

        pop();

       
    }
}