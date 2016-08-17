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
      this.blck1 = this.add.sprite(x - 32,y - 32,'blck');
      this.blck2 = this.add.sprite(x,y - 32,'blck');
  }
vert(x, y) {
  //visual blocks
      this.blck3 = this.add.sprite(x - 32,y - 32,'blck');
      this.blck4 = this.add.sprite(x - 32,y - 64,'blck');
      this.blck5 = this.add.sprite(x - 32,y,'blck');

  }

  create() {
    //physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //keys
    this.cursors = game.input.keyboard.createCursorKeys();
    
    //background
    this.background = this.add.tileSprite(1,1,800,600,'bckgr', 10);
    this.blck = this.add.sprite(100,200,'blck');
    //player
    this.player = this.add.sprite(400,500, 'sqhd');
    game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true;
    this.player.body.bounce.setTo(.03);
    this.player.body.drag.setTo(30);
    this.player.body.gravity.set(0,180);
    //block
    this.hort(400,300);
    this.vert(400,300);
    
    game.physics.arcade.enable(this.blck);
    game.physics.arcade.enable(this.blck1);
    game.physics.arcade.enable(this.blck2);
    game.physics.arcade.enable(this.blck3);
    game.physics.arcade.enable(this.blck4);
    game.physics.arcade.enable(this.blck5);
    
    this.blck.body.immovable = true;
    this.blck1.body.immovable = true;
    this.blck2.body.immovable = true;
    this.blck3.body.immovable = true;
    this.blck4.body.immovable = true;
    this.blck5.body.immovable = true;
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
    if (this.cursors.up.isDown) {
      this.player.body.velocity.y = -200;
    }
    //collisions
    game.physics.arcade.collide(this.player, this.blck);
    game.physics.arcade.collide(this.player, this.blck1);
    game.physics.arcade.collide(this.player, this.blck2);
    game.physics.arcade.collide(this.player, this.blck3);
    game.physics.arcade.collide(this.player, this.blck4);
    game.physics.arcade.collide(this.player, this.blck5);
  }
  
  //collisions
blckp(p,s) {
  
}
 
 
}

var game = new Phaser.Game(800,600);
game.state.add('Play', PlayState);
game.state.start('Play');
