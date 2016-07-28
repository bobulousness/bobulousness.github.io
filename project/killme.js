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
      this.blck = this.add.sprite(x + 32,y - 32,'blck');
      this.blck = this.add.sprite(x - 32,y - 32,'blck');
      this.blck = this.add.sprite(x,y - 32,'blck');
  }
vert(x, y) {
      this.blck1 = this.add.sprite(x - 32,y - 32,'blck');
      this.blck1 = this.add.sprite(x - 32,y - 64,'blck');
      this.blck1 = this.add.sprite(x - 32,y,'blck');
  }
    
  create() {
    //physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //keys
    this.cursors = game.input.keyboard.createCursorKeys();
    
    //background
    this.background = this.add.tileSprite(1,1,800,600,'bckgr', 10);
    
    //player
    /*this.player = this.add.sprite(300,240, 'sqhd');
    game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true
    this.player.body.bounce.setTo(0.3);
    this.player.body.drag.setTo(3000);*/
    //block
    this.hort(400,300);
    this.vert(400,300);
    game.physics.arcade.enable(this.blck);
    game.physics.arcade.enable(this.blck1);
 
    //creating the game scene
  }
  
  update() {
    // Game logic
   /*     if (this.cursors.left.isDown) {
      this.player.x -= 4;
    };
    if (this.cursors.right.isDown) {
      this.player.x += 5;
    };*/
  }
  //game.physics.arcade.collide(this.blck)
 
}
var game = new Phaser.Game(800,600);
game.state.add('Play', PlayState);
game.state.start('Play');
