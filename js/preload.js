var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		this.game.stage.backgroundColor = '479cde';
		
		var loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading');
        loadingBar.anchor.setTo(0.5, 0.5);
        
        this.load.setPreloadSprite(loadingBar);
        
		this.game.load.spritesheet('player', 'assets/img/ball.png');
	    this.game.load.tilemap('tilemap', 'assets/level.json', null, Phaser.Tilemap.TILED_JSON);
	    this.game.load.image('tiles', 'assets/img/spritesheet.png');
		this.game.load.image('retry', 'assets/img/retry.png');
		this.game.load.image('playbutton', 'assets/img/playbutton.png');
	},

	create: function(){
		this.game.state.start("GameTitle");
	}
}