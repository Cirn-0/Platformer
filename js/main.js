var Main = function(game) {

};

var cursors;

Main.prototype = {

	create: function() {
		
		var that = this;
		
		
		that.game.physics.startSystem(Phaser.Physics.ARCADE);
//		that.game.stage.backgroundColor = '479cde';
		
		//Add the tilemap and tileset image. The first parameter in addTilesetImage
		//is the name you gave the tilesheet when importing it into Tiled, the second
		//is the key to the asset in Phaser
	    that.map = that.game.add.tilemap('tilemap');
	    that.map.addTilesetImage('spritesheet', 'tiles');
		that.backgroundlayer = that.map.createLayer('BackgroundLayer');
	    that.groundLayer = that.map.createLayer('GroundLayer');

	    //Set what tiles can collide
	    that.map.setCollisionBetween(1, 100000, true, 'GroundLayer');

	    that.sprite = that.game.add.sprite(50, -300 + window.innerHeight, 'player');
	    that.game.physics.arcade.enable(that.sprite);

	    that.groundLayer.resizeWorld();

		that.sprite.body.bounce.y = 0.2;
		that.sprite.body.gravity.y = 1500;
		that.sprite.body.collideWorldBounds = true;

	    that.game.camera.follow(that.sprite);
        cursors = that.game.input.keyboard.createCursorKeys();
	},

	update: function() {
		
		var that = this; 
		
		that.game.physics.arcade.collide(that.sprite, that.groundLayer);
		
		if (cursors.left.isDown) {
        	that.sprite.x -= 4;
    	}
    	else if (cursors.right.isDown) {
        	that.sprite.x += 4;
    	}

    	if (cursors.up.isDown) {
        	that.sprite.y -= 11;
    	}
    	if (that.sprite.body.bottom >= that.world.bounds.bottom) {
        		that.gameOver();
    	}
	},

	gameOver: function() {
		var that = this; 
		that.game.state.start('GameOver');
	},

};