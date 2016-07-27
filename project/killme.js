'use strict';

var killme = { };
killme.Play = function () {};
killme.Play.prototype = {
  init: function() {
    //creating variables
  },
  preload: function() {
    //loading images
    this.load.spritesheet('bckgr', 'strsky.png', 800, 600, 10);
    this.load.image('blck1', 'blck.png');
    this.load.image('sqhd', 'sqhd.png');
  },
  

  /*create: function() {
    hort: function(x, y) {
      this.blck = this.add.sprite(x, y, 'blck1');
      this.blck1 = this.add.sprite(x += 32, y, 'blck1');
      this.blck2 = this.add.sprite(x += 64, y, 'blck1');
  },*/
    
    this.cursors = game.input.keyboard.createCursorKeys();
    //background
    this.background = this.add.tileSprite(1,1,800,600,'bckgr', 10);
    
    //block

    //hort(500,360);
    this.blck.anchor.setTo(0.5, 0.5);
    
    game.physics.arcade.enable(this.blck);
    //creating the game scene
  },
  update: function() {
    // Game logic
  },
}
