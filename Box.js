class Box {    
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height =  height;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }    

    display(){
        var pos=this.body.position;
        fill(255,255,255);
        rectMode(CENTER);        
        rect(pos.x,pos.y,this.width,this.height);
        
    }

}