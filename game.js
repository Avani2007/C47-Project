class GameClass{

    constructor(){
    }

    gameState(){
        var RefGameState = database.ref('gameState');
        RefGameState.on("value",(data)=>{
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player = new Playerclass()
         var RefPlayerCount = await database.ref('playerCount')
         RefPlayerCount.on("value",()=>{
             PC = RefPlayerCount.val()
             player.getPlayerCount()
         })   
         form = new Form()
         form.display()
        } 

      
        
    }

    play(){

        roomBg.visible = true 

        form.hide()
        tom = createSprite(1240,displayHeight/2+150)
        tom.addImage(tomImg);
        tom.scale=0.63;
        elsa = createSprite(600,displayHeight/2+100)
        elsa.addImage(elsaImg);
        elsa.scale=0.31;
        minion = createSprite(440,displayHeight/2+180)
        minion.addImage(minionImg);
        minion.scale=0.67;
        moana = createSprite(930,displayHeight/2+125)
        moana.addImage(moanaImg);
        moana.scale=0.3;
        oggy = createSprite(280,displayHeight/2+175)
        oggy.addImage(oggyImg);
        oggy.scale=0.29;
        jerry = createSprite(1080,displayHeight/2+210)
        jerry.addImage(jerryImg);
        jerry.scale=0.29;
        
     form.hide();

        Playerclass.getPlayerInfo();

        if (allPlayers!==undefined){
            background(roomImg)
            image(roomImg, 0, 0, displayWidth, displayHeight)
            
        var index = 0;

        var x;
        var y;

        for (var plr in allPlayers) {
            index+=1

          //  x = mouseX;
          //  y = mouseY;

            players[index-1].x = x
            players[index-1].y = y

            if (index===player.index){
                stroke(10);
                fill("green");
                ellipse(x,y,80,100);
                players[index-1].shapeColor = "green";
                camera.position.x = players[index-1].x;
                camera.position.y = players[index-1].y;
            
            }
        }
        


    }
    }
}