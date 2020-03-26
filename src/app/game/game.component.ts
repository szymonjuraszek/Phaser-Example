import {Component, OnInit} from '@angular/core';
import Phaser from 'phaser';
import {MenuSceneComponent} from '../scenes/menu-scene/menu-scene.component';
import {AppComponent} from '../app.component';
import {MainSceneComponent} from '../scenes/main-scene/main-scene.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor(private menuScene: MenuSceneComponent, private mainScene: MainSceneComponent) {
    this.config = {
      type: Phaser.AUTO,
      height: 1024,
      width: 1600,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      scene: [],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {y: 0}
        }
      }
    };
  }

  ngOnInit() {
    console.error('Initialize Game Object');

    this.phaserGame = new Phaser.Game(this.config);
    this.phaserGame.scene.add('menu', this.menuScene);
    this.phaserGame.scene.add('main', this.mainScene);
    this.phaserGame.scene.start('menu');

    console.error('Completed Initialization Game Object');
  }

}
