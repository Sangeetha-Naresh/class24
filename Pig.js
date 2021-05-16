class Pig
{
  
    constructor(x,y)
    {
        var options=
        {
            restitution: 0.8,
            density: 1.0,
            friction: 0.3
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=52;
        this.height=52;
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

        rectMode(CENTER);

      
        fill("green");

        rect(0,0,this.width,this.height)

        pop();

       
    }
}