var GameTitle = function(game){};

var balls;

GameTitle.prototype = {
	
	create: function() {
	var that = this;	
	that.game.stage.backgroundColor = '479cde';
	
	balls = game.add.group();
    balls.enableBody = true;
    balls.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 20; i++) {
        var ball = balls.create(window.innerWidth/2, 50, 'player');
        ball.body.collideWorldBounds=true;
        ball.body.gravity.x = game.rnd.integerInRange(-50, 50);
        ball.body.gravity.y = 100 + Math.random() * 100;
        ball.body.bounce.setTo(1, 1);
    }	
	var play = that.game.add.button(window.innerWidth/2, window.innerHeight/2, 'playbutton', that.playTheGame, that);

	},
	
	update: function() {
	var that = this;
	that.game.physics.arcade.collide(balls);
	},
	
	playTheGame: function() {
		var that = this;
		that.game.state.start("Main");
	}

}