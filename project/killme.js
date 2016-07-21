'use strict';


killme.Play = function () {};
killme.Play.prototype = {
  init: function() {
    //creating variables
  },
  preload: function() {
    //loading images
    this.load.spritesheet('bckgr', 'strsky.png', 800, 600, 1);
    this.load.image('blck1', 'blck.png');
    this.load.image('sqhd', 'sqhd.png');
  },
  create: function() {
    
    cursors = game.input.keyboard.createCursorKeys();
    //background
    this.background = this.add.tileSprite(1,1,800,600,'bckgr');
    this.background.autoScroll(0,0);
    this.background.scale.set(1);
   
    
    //block
    
    game.physics.arcade.enable(this.blck);
    //creating the game scene
  },
  update: function() {
    // Game logic
  },
}
