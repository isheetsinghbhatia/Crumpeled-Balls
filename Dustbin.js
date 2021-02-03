class Dustbin{
    constructor(x,y){
        this.x = x
        this.y = y
        this.w = 200
        this.h = 100
        this.t = 20
        this.angle = 0
        var options = {
            isStatic:true
        }
        this.bBody = Bodies.rectangle(this.x,this.y,this.w,this.t,options)
        this.lBody = Bodies.rectangle(this.x-this.w/2,this.y-this.h/2,this.t,this.h,options)
        this.rBody = Bodies.rectangle(this.x+this.w/2,this.y+this.h/2,this.t,this.h,options)
        Matter.Body.setAngle(this.lBody,this.angle)
        Matter.Body.setAngle(this.rBody,-1*this.angle)
        World.add(world,this.bBody)
        World.add(world,this.lBody)
        World.add(world,this.rBody)
    }
    display(){
        var posb = this.bBody.position
        var posl = this.lBody.position
        var posr = this.rBody.position

        push()
        translate(posl.x,posl.y)
        fill("white")
        rotate(this.angle)
        rect(0,0,this.t,this.h)
        pop()

        push()
        translate(posr.x,posr.y)
        fill("white")
        rotate(-1*this.angle)
        rect(0,0,this.t,this.h)
        pop()

        push()
        translate(posb.x,posb.y)
        fill("white")
        rect(0,0,this.w,this.t)
        pop()
    }


}
