class Game {
    constructor() {
    }

    getGameState() {
        var gameStateREF = database.ref("gameState");
        gameStateREF.on("value",function(data){
        gameState = data.val();
        });
    }

    updateGameState(update) {
        database.ref("/").set({
            gameState :update
        })
    }

    async startGame() {
        if(gameState === 0) {
            player = new Player();
            var difference = await database.ref("playerCount").once("value");
            if(difference.exists()) {
                count = difference.val()
                player.Count()
            }
            form = new Forms();
            form.display();
        }
    }

    play() {
        form.hide();
        text("Start Race", 350, 350);
        player.registerPlayers();
        if(registeredPlayers != undefined) {
            var displayPosition = 4;
            var index = 0;
            var x = 0;
            var y;
            for(var i in registeredPlayers) {
                index++;
                x = x + 200;
                y = registeredPlayers[i].distance;
                cars[i].x = x;
                cars[i].y = y;
            }
        }
        if(keyDown(UP_ARROW) && player.index != null) {
            player.distance += 10;
            player.updatePlayer();
        }

    }
}