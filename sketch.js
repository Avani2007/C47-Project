var formBg, startbgimg, roomImg, gamePoster, startBg;
var PC, gameState=0;
var moana, minion, elsa, tom, jerry, oggy;
var moanaImg, minionImg, elsaImg, tomImg, jerryImg, oggyImg;
var allPlayers, players = [];
var form, player, game;
var database;
var HTPoggy, HTPelsa, HTPtomnjerry, HTPcarRacing, HTPplinko, HTPballoonBursters, HTPmouse, HTParrowKeys, HTPtheEnd, HTPfamily, HTPcctv;
var HTPoggyimg, HTPelsaimg, HTPtomnjerryimg, HTPcarRacingimg, HTPplinkoimg, HTPballoonBurstersimg, HTPmouseimg, HTParrowKeysimg, HTPtheEndimg, HTPfamilyimg, HTPcctvimg;
var audio1, buttonClick, introStory, HTP, roles, footstep;

function preload(){
roomImg = loadImage("images/others/room.jpeg")
formBg = loadImage("images/others/intro bg image.png")
startbgimg = loadImage("images/others/bgForm.jpg")
moanaImg = loadImage("images/characters/moana.png")
minionImg = loadImage("images/characters/minion.png")
elsaImg = loadImage("images/characters/elsa.png")
tomImg = loadImage("images/characters/tom.png")
jerryImg = loadImage("images/characters/jerry.png")
oggyImg = loadImage("images/characters/oggy.png")
HTPoggyimg = loadImage("images/characters/introOggy.jpg")
HTPelsaimg = loadImage("images/characters/introElsa.jpg")
HTPtomnjerryimg = loadImage("images/characters/introTomNJerry.png")
HTPcarRacingimg = loadImage("images/mini games/introCarRacing.jpg")
HTPplinkoimg = loadImage("images/mini games/introPlinko.jpg")
HTPballoonBurstersimg = loadImage("images/mini games/introBalloonBursters.png")
HTPmouseimg = loadImage("images/others/introMouse.jpg")
HTParrowKeysimg = loadImage("images/others/introArrowKeys.jpg")
HTPtheEndimg = loadImage("images/others/HTPend.gif")
HTPcctvimg = loadImage("images/others/introCCTV.png")
HTPfamilyimg = loadImage("images/others/HTPfunimage.png")
entry = loadSound("sounds/entering in the start.mp3")
buttonClick = loadSound("sounds/button click.mp3")
introStory = loadSound("sounds/intro story.mp3")
HTP = loadSound("sounds/intro HTP.mp3")
roles = loadSound("sounds/roles screen.mp3")
footstep = loadSound("sounds/footstep.mp3")
}

function setup() {
 createCanvas(displayWidth-displayWidth/80,displayHeight/2+displayHeight/3+25)
 database = firebase.database();
 roomBg = createSprite(displayWidth/2-10,displayHeight/2)
 roomBg.addImage(roomImg);
 roomBg.scale = 1.55;
 roomBg.visible = false;
 startBg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
 startBg.addImage(startbgimg)
 startBg.scale = 3
 startBg.visible = false
 HTPoggy = createSprite(displayWidth/2-500, displayHeight/6, 50, 50)
 HTPoggy.addImage(HTPoggyimg)
 HTPoggy.scale = 0.28
 HTPoggy.visible = false
 HTPelsa = createSprite(displayWidth/2, displayHeight/6, 50, 50)
 HTPelsa.addImage(HTPelsaimg)
 HTPelsa.scale = 0.28
 HTPelsa.visible = false
 HTPtomnjerry = createSprite(displayWidth/2+500, displayHeight/6, 50, 50)
 HTPtomnjerry.addImage(HTPtomnjerryimg)
 HTPtomnjerry.scale = 0.6
 HTPtomnjerry.visible = false
 HTPcarRacing = createSprite(displayWidth/2-500, displayHeight/4, 50, 50)
 HTPcarRacing.addImage(HTPcarRacingimg)
 HTPcarRacing.scale = 0.55
 HTPcarRacing.visible = false
 HTPplinko = createSprite(displayWidth/2, displayHeight/4, 50, 50)
 HTPplinko.addImage(HTPplinkoimg)
 HTPplinko.scale = 0.45
 HTPplinko.visible = false
 HTPballoonBursters = createSprite(displayWidth/2+500, displayHeight/4, 50, 50)
 HTPballoonBursters.addImage(HTPballoonBurstersimg)
 HTPballoonBursters.scale = 1
 HTPballoonBursters.visible = false
 HTPmouse = createSprite(displayWidth/2-500, displayHeight/6, 50, 50)
 HTPmouse.addImage(HTPmouseimg)
 HTPmouse.scale = 0.7
 HTPmouse.visible = false
 HTParrowKeys = createSprite(displayWidth/2+500, displayHeight/6, 50, 50)
 HTParrowKeys.addImage(HTParrowKeysimg)
 HTParrowKeys.scale = 1
 HTParrowKeys.visible = false
 HTPtheEnd = createSprite(displayWidth/2-300, displayHeight/2+150, 50, 50)
 HTPtheEnd.addImage(HTPtheEndimg)
 HTPtheEnd.scale = 0.8
 HTPtheEnd.visible = false
 HTPcctv = createSprite(displayWidth/2, displayHeight/6, 50, 50)
 HTPcctv.addImage(HTPcctvimg)
 HTPcctv.scale = 1
 HTPcctv.visible = false
 HTPfamily = createSprite(displayWidth/2+300, displayHeight/2+150, 50, 50)
 HTPfamily.addImage(HTPfamilyimg)
 HTPfamily.scale = 1.5
 HTPfamily.visible = false
 //form = new Form()
 player = new Playerclass()
 game = new GameClass()
 game.gameState()
 game.start()

}

function draw() {
  background(formBg)
  
 // game.start()
  drawSprites();
}