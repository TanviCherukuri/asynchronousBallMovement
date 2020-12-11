var database,game,gameState,player,form,count,registeredPlayers,car1,car2,car3,car4,distance;
var cars = [];
function setup(){
    createCanvas(displayWidth-10,displayHeight);
    database = firebase.database();
    gameState = 0;
    distance = 0;
    game = new Game();
    game.getGameState();
    game.startGame();
    car1 = createSprite(500,500);
    car2 = createSprite(700,500);
    car3 = createSprite(900,500);
    car4 = createSprite(1100,500);
    cars = [car1,car2,car3,car4];
}

function draw(){
    background("white");
    if(count === 2) {
        game.updateGameState(1);
    }
    if(gameState === 1) {
        clear();
        game.play();
    }

    drawSprites();
}

