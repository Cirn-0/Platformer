var GameOver = function(game){};

GameOver.prototype = {
	
  	create: function(){
  		var that = this;
  		that.game.stage.backgroundColor = '479cde';
		var playButton = that.game.add.button(window.innerWidth/2, window.innerHeight/2, 'retry', that.playTheGame, that);
			playButton.anchor.setTo(0.5, 0.5);
			
	},
	
	playTheGame: function(){
		var that = this;
		that.game.state.start("Main");
	}
	
}