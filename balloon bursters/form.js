class Form{

    constructor(){
        this.button = createButton('Enter')
        this.input = createInput('Name')
        this.greeting = createElement('h1')
    }

    display(){
        var title = createElement('h1')
        title.html('Balloon Bursters')
        
        title.position(700,200)
        this.button.position(970,400)
        this.input.position(770,400)
        this.greeting.position(650,150)
        player.name = this.input.value()
        this.button.mousePressed(()=>{
            this.button.hide()
            this.input.hide()
            console.log(this.input)
           //
            console.log(Myname)
            PC+=1
            console.log(player);
            player.index = 1
           player.updateName()
           player.updateCount(PC)
            this.greeting.html("Hello  @"+player.name+"!")
            
           

        })
    }

}