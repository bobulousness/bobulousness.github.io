'use strict';

var killme = {};
killme.Play = function () {};
killme.Play.prototype = {
  init: function() {
    //creating variables
  }
  preload: function() {
    //loading images
    this.load.image('bckgr','strsky.png',800,600,10);
    this.load.image('blck1','blck.png');
    this.load.image('sqhd','sqhd.png');
  }
  create: function() {
    
    cursors = game.input.keyboard.createCursorKeys();
    //background
    this.background = this.add.sprite(800,600,'bckgr');
   
    
    //block
    
    game.physics.arcade.enable(this.blck);
    //creating the game scene
  }
  update: function() {
    // Game logic
  }
}
//----------------------------------------------------------------------
var game = new Phaser.Game(800,600);
game.state.add('play', killme.Play);
game.state.start('play');
