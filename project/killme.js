'use strict';

killme = {}
killme.Play = function () {}

  killme.Play.prototype = {
  init: function() {
    //creating variables
  }
  preload: function() {
    //loading images
    this.load.image('bckgr','strsky.gif');
    this.load.image('blck','blck.gif');
    this.load.image('sqhd','sqhd.gif');
  }
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    cursors = game.input.keyboard.createCursorKeys();
    //background
    this.bckgr = this.add.tileSprite(1,1,800,600,'bckgr')
    
    //creating the game scene
  }
  update: function() {
    // Game logic
  }
}
