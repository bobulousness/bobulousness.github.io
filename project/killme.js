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
    this.load.image('stpvrt','blckstpvrt.png');
    this.load.image('stphrt','blckstphrt.png');
  }
      //functionm for horizontal block placement

 hort(x, y) {
      //visual blocks
      this.blck = this.add.sprite(x - 64,y - 32,'blck');
      this.blck = this.add.sprite(x - 32,y - 32,'blck');
      this.blck = this.add.sprite(x,y - 32,'blck');
      //left and rights side bumpers
      this.stpvrt = this.add.sprite(x - 63, y - 31, 'stpvrt');
      this.stpvrtl = this.add.sprite(x + 31, y - 31, 'stpvrt');
      //top bumpers
      this.stphrtt = this.add.sprite(x - 31, y - 31, 'stphrt');
      this.stphrtt = this.add.sprite(x - 63, y - 31, 'stphrt');
      this.stphrtt = this.add.sprite(x + 1, y - 31, 'stphrt');
      this.stphrtt = this.add.sprite(x - 51, y - 31, 'stphrt');
      this.stphrtt = this.add.sprite(x - 10, y - 31, 'stphrt');
  }
vert(x, y) {
  //visual blocks
      this.blck1 = this.add.sprite(x - 32,y - 32,'blck');
      this.blck1 = this.add.sprite(x - 32,y - 64,'blck');
      this.blck1 = this.add.sprite(x - 32,y,'blck');
      //top and bottom bumpers
      this.stphrtt = this.add.sprite(x - 31, y - 63, 'stphrt');
      this.stphrt = this.add.sprite(x - 31, y + 31, 'stphrt');
      //left side bumpers
      this.stpvrtl = this.add.sprite(x - 31, y - 31, 'stpvrt');
      this.stpvrtl = this.add.sprite(x - 31, y, 'stpvrt');
      this.stpvrtl = this.add.sprite(x - 31, y - 63, 'stpvrt');
      this.stpvrtl = this.add.sprite(x - 31, y - 51, 'stpvrt');
      this.stpvrtl = this.add.sprite(x - 31, y - 10, 'stpvrt');
      //right side bumpers
      this.stpvrt = this.add.sprite(x + 1, y - 31, 'stpvrt');
      this.stpvrt = this.add.sprite(x + 1, y - 63, 'stpvrt');
      this.stpvrt = this.add.sprite(x + 1, y, 'stpvrt');
      this.stpvrt = this.add.sprite(x + 1, y - 51, 'stpvrt');
      this.stpvrt = this.add.sprite(x + 1, y - 10, 'stpvrt');
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
    this.player.body.drag.setTo(30);
    this.player.body.gravity.set(0,180);
    //block
    //this.hort(400,300);
    this.vert(400,300);
    //game.physics.arcade.enable(this.blck);
    game.physics.arcade.enable(this.blck1);
    game.physics.arcade.enable(this.stpvrt);
    game.physics.arcade.enable(this.stphrt);
 
    //creating the game scene
  }
  
  update() {
    // Game logic
    if (this.cursors.left.isDown) {
      this.player.body.velocity.x -= 3;
    }
    if (this.cursors.right.isDown) {
      this.player.body.velocity.x += 3;
      }
    }
    if (this.cursors.up.isDown) {
      this.player.body.velocity.x = -200;
    }
    //collisions
    //bottom
    game.physics.arcade.collide(this.stpvrt, this.player, this.handleCollisionb);
    //top
    game.physics.arcade.collide(this.stpvrtt, this.player, this.handleCollisiont);
    //left
    game.physics.arcade.collide(this.stpvrtl, this.player, this.handleCollisionl);
    //right
    game.physics.arcade.collide(this.stpvrt, this.player, this.handleCollisionr);
  }
  handleCollisionb() {
    this.player.body.y += 1;
    this.player.body.velocity.
  }
 
}
var game = new Phaser.Game(800,600);
game.state.add('Play', PlayState);
game.state.start('Play');
