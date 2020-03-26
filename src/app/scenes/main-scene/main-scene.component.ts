import {Component, Injectable} from '@angular/core';
import Phaser from 'phaser';
import Sprite = Phaser.GameObjects.Sprite;
import {WebsocketService} from '../../websocket/websocket.service';

@Component({
  selector: 'app-main-scene',
  templateUrl: './main-scene.component.html',
  styleUrls: ['./main-scene.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class MainSceneComponent extends Phaser.Scene {

  private layer1: Phaser.Tilemaps.DynamicTilemapLayer;
  private layer2: Phaser.Tilemaps.DynamicTilemapLayer;
  private layer3: Phaser.Tilemaps.DynamicTilemapLayer;

  private background: Phaser.Tilemaps.Tilemap;
  private figures: Phaser.Tilemaps.Tilemap;
  private filling: Phaser.Tilemaps.Tilemap;

  private pacmanObjects: Phaser.Tilemaps.Tileset;
  private coin: Phaser.Tilemaps.Tileset;

  private exitButton: Phaser.GameObjects.Image;
  private coinsSpace: Phaser.Tilemaps.Tilemap;
  private player: Phaser.Physics.Arcade.Sprite;
  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  private layer4: Phaser.Tilemaps.DynamicTilemapLayer;
  private board: Phaser.Tilemaps.Tilemap;
  private monster1: Phaser.GameObjects.Sprite;
  private monster2: Phaser.GameObjects.Sprite;
  private monster3: Phaser.GameObjects.Sprite;
  private monster4: Phaser.GameObjects.Sprite;

  private counter = 0;

  constructor(private websocketService: WebsocketService) {
    super({key: 'main'});
  }

  create() {
    console.error('Create Board');

    this.board = this.add.tilemap('board');

    this.monster1 = this.add.sprite(400, 200, 'monster1');
    this.monster2 = this.add.sprite(300, 200, 'monster2');
    this.monster3 = this.add.sprite(200, 600, 'monster3');
    this.monster4 = this.add.sprite(100, 400, 'monster4');
    // this.filling = this.add.tilemap('filling');
    // this.background = this.add.tilemap('background');
    // this.figures = this.add.tilemap('figures');
    // this.coinsSpace = this.add.tilemap('coinsSpace');

    // this.pacmanObjects = this.background.addTilesetImage('pacmanObjects');
    // this.coin = this.background.addTilesetImage('coin');
    this.pacmanObjects = this.board.addTilesetImage('pacman-elements');
    this.coin = this.board.addTilesetImage('coin-new');

    this.layer1 = this.board.createDynamicLayer('filling', [this.pacmanObjects], 0, 0);
    this.layer2 = this.board.createDynamicLayer('background_main', [this.pacmanObjects], 0, 0);
    this.layer3 = this.board.createDynamicLayer('coins', [this.coin], 0, 0);
    this.layer4 = this.board.createDynamicLayer('figures', [this.pacmanObjects], 0, 0);

    this.exitButton = this.add.image(this.game.canvas.width - 48, 48, 'exit-button');

    this.exitButton.setInteractive();

    this.exitButton.on('pointerover', () => {
      console.log('hovahh');
    });
    this.exitButton.on('pointerout', () => {
      console.log('OUTAA HERE');
    });
    this.exitButton.on('pointerup', () => {
      this.switchScene();
    });

    this.player = this.physics.add.sprite(48, 144, 'player');

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    this.layer2.setCollisionBetween(148, 238);
    this.physics.add.collider(this.player, this.layer2);


    this.anims.create({
      key: 'monster1_anim',
      frames: this.anims.generateFrameNumbers('monster1', {}),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: 'monster2_anim',
      frames: this.anims.generateFrameNumbers('monster2', {}),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: 'monster3_anim',
      frames: this.anims.generateFrameNumbers('monster3', {}),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: 'monster4_anim',
      frames: this.anims.generateFrameNumbers('monster4', {}),
      frameRate: 20,
      repeat: 0
    });

    this.monster1 = this.add.sprite(700, 144, 'monster1');
    this.monster2 = this.add.sprite(600, 144, 'monster2');
    this.monster3 = this.add.sprite(500, 144, 'monster3');
    this.monster4 = this.add.sprite(400, 144, 'monster4');

    this.monster1.play('monster1_anim');
    this.monster2.play('monster2_anim');
    this.monster3.play('monster3_anim');
    this.monster4.play('monster4_anim');

    this.monster1.setInteractive();
    this.monster2.setInteractive();
    this.monster3.setInteractive();
    this.monster4.setInteractive();

    this.physics.add.collider(this.monster1, this.layer2);
    this.physics.add.collider(this.monster2, this.layer2);
    this.physics.add.collider(this.monster3, this.layer2);
    this.physics.add.collider(this.monster4, this.layer2);

    console.error('Completed Board');
  }

  preload() {
    this.load.image('pacman-elements', 'assets/main/images/pacmanObjects.png');
    this.load.image('coin-new', 'assets/main/images/coin.png');

    this.load.image('exit-button', 'assets/main/images/exit-button.png');

    this.load.image('player', 'assets/main/images/player.jpg');
    this.load.image('monster', 'assets/main/images/player.jpg');

    this.load.tilemapTiledJSON('board', 'assets/main/map/board.json');
    // this.load.tilemapCSV('background', 'assets/main/map/board_background_main.csv');
    // this.load.tilemapCSV('figures', 'assets/main/map/board_figures.csv');
    // this.load.tilemapCSV('filling', 'assets/main/map/board_filling.csv');
    // this.load.tilemapCSV('coinsSpace', 'assets/main/map/board_coins.csv');

    this.load.spritesheet('monster1', 'assets/main/images/monster.jpg', {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet('monster2', 'assets/main/images/monster.jpg', {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet('monster3', 'assets/main/images/monster.jpg', {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet('monster4', 'assets/main/images/monster.jpg', {
      frameWidth: 32,
      frameHeight: 32
    });
  }

  update() {
    console.log('Scena GRA');
    // this.moveShip(this.monster1, 5);
    // this.moveShip(this.monster2, 7);
    // this.moveShip(this.monster3, 9);
    // this.moveShip(this.monster4, 11);
    this.counter++;
    if (this.counter > 5) {
      this.counter = 0;
      this.websocketService.sendMessage(this.player.x, this.player.y);
    }

    this.movePlayerManager();
  }

  moveShip(ship: Sprite, speed) {
    if (ship.x < 0) {
      console.error('collide');
      ship.x = 0;
    } else {
      ship.x -= speed;
    }
  }

  switchScene() {
    this.websocketService.disconnect();
    this.game.scene.stop('main');
    this.game.scene.start('menu');

    console.error('EXIT');
  }

  movePlayerManager() {
    if (this.cursorKeys.left.isDown === true) {
      this.player.setVelocityX(-64);
      this.player.setVelocityY(0);
    } else if (this.cursorKeys.right.isDown === true) {
      this.player.setVelocityX(64);
      this.player.setVelocityY(0);
    } else if (this.cursorKeys.up.isDown === true) {
      this.player.setVelocityY(-64);
      this.player.setVelocityX(0);
    } else if (this.cursorKeys.down.isDown === true) {
      this.player.setVelocityY(64);
      this.player.setVelocityX(0);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
    }
  }

}
