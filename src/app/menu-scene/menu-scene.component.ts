import {Component} from '@angular/core';

@Component({
  selector: 'app-menu-scene',
  templateUrl: './menu-scene.component.html',
  styleUrls: ['./menu-scene.component.css']
})
export class MenuSceneComponent extends Phaser.Scene {
    [x: string]: any;

  background: Phaser.GameObjects.TileSprite;
  monster1: Phaser.GameObjects.Sprite;
  monster2: Phaser.GameObjects.Sprite;
  monster3: Phaser.GameObjects.Sprite;
  monster4: Phaser.GameObjects.Sprite;
  // player: Phaser.GameObjects.Sprite;
  cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;


  constructor() {
    super({key: 'menu'});
  }

  create() {
    console.log('create method');

    this.add.text(50, 50, 'Druga scena');
    this.background = this.add.tileSprite(0, 0, 1000, 627, 'background');
    this.background.setOrigin(0, 0);

    this.monster1 = this.add.sprite(400, 200, 'monster1');
    this.monster2 = this.add.sprite(300, 200, 'monster2');
    this.monster3 = this.add.sprite(200, 600, 'monster3');
    this.monster4 = this.add.sprite(100, 400, 'monster4');

    this.monster1.play('monster1_anim');
    this.monster2.play('monster2_anim');
    this.monster3.play('monster3_anim');
    this.monster4.play('monster4_anim');

    this.monster1.setInteractive();
    this.monster2.setInteractive();
    this.monster3.setInteractive();
    this.monster4.setInteractive();

    this.input.on('gameobjectdown', this.destroyShip, this);

    this.player = this.physics.add.sprite(400, 400, 'player');
    this.player.play('thrust');
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    // this.spacebar = this.input.keyboard.addKey(Phaser.Keyboard.KeyCodes.SPACE);
  }

  preload() {
    console.log('preload method');
  }

  update() {
    console.log('update method');
    this.background.tilePositionY -= 2;
    this.moveShip(this.monster1, 5);
    this.moveShip(this.monster2, 7);
    this.moveShip(this.monster3, 9);
    this.moveShip(this.monster4, 11);

    this.movePlayerManager();

    // if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
    //   console.log('FIRE!');
    // }

  }

  moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y > 625) {
      this.resetShipPos(ship);
    }
  }

  resetShipPos(ship) {
    ship.y = 0;
    const randomX = Phaser.Math.Between(0, 1000);
    ship.x = randomX;
  }

  destroyShip(pointer, gameObject) {
    gameObject.setTexture('explosion');
    gameObject.play('explode');
  }

  movePlayerManager() {
    if (this.cursorKeys.left.isDown === true) {
      this.player.setVelocityX(-400);
      this.player.setVelocityY(0);
    } else if (this.cursorKeys.right.isDown === true) {
      this.player.setVelocityX(400);
      this.player.setVelocityY(0);
    } else if (this.cursorKeys.up.isDown === true) {
      this.player.setVelocityY(-400);
      this.player.setVelocityX(0);
    } else if (this.cursorKeys.down.isDown === true) {
      this.player.setVelocityY(400);
      this.player.setVelocityX(0);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
    }
  }
}
