'use strict';
class PlayState {

  init() {
    //creating variables

  }
  preload() {
    //loading images
    this.load.spritesheet('bckgr', 'strsky.png', 800, 600, 10);
    this.load.image('blck', 'blck.png');
    this.load.image('sqhd', 'sqhd.png');
  }
      //functionm for horizontal block placement

 hort(x, y) {
      this.blck2 = this.add.sprite(x + 32,y,'blck');
      this.blck1 = this.add.sprite(x + 64,y,'blck');
      this.blck = this.add.sprite(x,y,'blck');
  }
    
  create() {
    this.cursors = game.input.keyboard.createCursorKeys();
    
    //background
    this.background = this.add.tileSprite(1,1,800,600,'bckgr', 10);
    
    //player
    this.player = this.add.sprite(300,240, 'sqhd');
    //block
    
   
    this.hort(500,360);
    
    
    this.blck.anchor.setTo(0.5, 0.5);
    
    game.physics.arcade.enable(this.blck);
    //creating the game scene
  }
  
  update() {
    // Game logic
  }
  
 
}
var game = new Phaser.Game(800,600);
game.state.add('Play', PlayState);
game.state.start('Play');
