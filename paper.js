class Paper {
    constructor(radius) {

        var options = {

            'isStatic': false,

                'restitution':0.5,
                      
                    'friction':0.5,

                        'density':1.2

                                } 

                                this.image = loadImage("sprites/paper.png"); 

                              this.body = Bodies.circle(100, 100, radius, options);

                    this.x = 100;

                this.y = 100;

            this.radius = radius;

        World.add(world, this.body);

    } 
    
    display(){

        var pos = this.body.position;

            var angle = this.body.angle;

                push();

                    translate(pos.x, pos.y);
                    
                         rotate(angle);

                    ellipse(this.x, this.y, this.radius);

                pop();
                

            imageMode(CENTER);
                      
        image(this.image);
           
    }
      

}  
