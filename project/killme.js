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
      this.blck1 = this.add.sprite(x - 32,y,'blck');
      this.blck = this.add.sprite(x,y,'blck');
  }
vert(x, y) {
      this.blck3 = this.add.sprite(x,y + 32,'blck');
      this.blck4 = this.add.sprite(x,y - 32,'blck');
      this.blck5 = this.add.sprite(x,y,'blck');
  }
    
  create() {
    //physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //keys
    this.cursors = game.input.keyboard.createCursorKeys();
    
    //background
    this.background = this.add.tileSprite(1,1,800,600,'bckgr', 10);
    
    //player
    this.player = this.add.sprite(300,240, 'sqhd');
    game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true
    this.player.body.bounce.setTo(0.3);
    //block
    this.hort(400,300);
    this.vert(400,300);
    this.blck1.anchor.setTo(1.0,1.0);
    this.blck2.anchor.setTo(1.0,1.0);
    this.blck3.anchor.setTo(1.0,1.0);
    this.blck4.anchor.setTo(1.0,1.0);
    this.blck5.anchor.setTo(1.0,1.0);
    this.blck.anchor.setTo(1.0,1.0);
    game.physics.arcade.enable(this.blck);
    game.physics.arcade.enable(this.blck1);
    game.physics.arcade.enable(this.blck2);
    game.physics.arcade.enable(this.blck3);
    game.physics.arcade.enable(this.blck4);
    game.physics.arcade.enable(this.blck5);
    //creating the game scene
  }
  
  update() {
    // Game logic
  }
  
 
}
var game = new Phaser.Game(800,600);
game.state.add('Play', PlayState);
game.state.start('Play');
