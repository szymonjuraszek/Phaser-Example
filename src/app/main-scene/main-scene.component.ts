import {Component, OnInit} from '@angular/core';
// @ts-ignore
import Phaser from 'phaser';

@Component({
  selector: 'app-main-scene',
  templateUrl: './main-scene.component.html',
  styleUrls: ['./main-scene.component.css']
})
export class MainSceneComponent extends Phaser.Scene {
  menu: Phaser.GameObjects.Image;
  add: Phaser.GameObjects.GameObjectFactory;
  scene: Phaser.GameObjects.Scene;
  anims: Phaser.Animations.AnimationManager;
  load: Phaser.Loader.LoaderPlugin;

  constructor() {
    super({key: 'main'});
  }

  create() {
    this.add.text(20, 20, 'Loading game ..');
    this.menu = this.add.image(0, 0, 'menu');
    this.menu.setOrigin(0, 0);

    const helloButton = this.add.text(500, 100, 'Start Game', {fill: '#0f0'});
    helloButton.setInteractive();
    helloButton.on('pointerdown', () => {
      this.scene.start('menu');
    });

    this.anims.create({
      key: 'monster1_anim',
      frames: this.anims.generateFrameNumbers('monster1'),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: 'monster2_anim',
      frames: this.anims.generateFrameNumbers('monster1'),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: 'monster3_anim',
      frames: this.anims.generateFrameNumbers('monster1'),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: 'monster4_anim',
      frames: this.anims.generateFrameNumbers('monster1'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'thrust',
      frames: this.anims.generateFrameNumbers('player'),
      frameRate: 20,
      repeat: -1
    });
  }

  preload() {
    this.load.image('background', 'assets/images/menu-pacman.jpg');
    this.load.image('button', 'assets/images/button.png');
    this.load.image('menu', 'assets/images/menu.jpg');

    this.load.spritesheet('monster1', 'assets/images/monster.png', {
      frameWidth: 50,
      frameHeight: 50
    });
    this.load.spritesheet('monster2', 'assets/images/monster.png', {
      frameWidth: 50,
      frameHeight: 50
    });
    this.load.spritesheet('monster3', 'assets/images/monster.png', {
      frameWidth: 50,
      frameHeight: 50
    });
    this.load.spritesheet('monster4', 'assets/images/monster.png', {
      frameWidth: 50,
      frameHeight: 50
    });


    this.load.spritesheet('player', 'assets/images/player.png', {
      frameWidth: 50,
      frameHeight: 31
    });
  }

  update() {
    console.log('Pierwsza scena');
  }

}
