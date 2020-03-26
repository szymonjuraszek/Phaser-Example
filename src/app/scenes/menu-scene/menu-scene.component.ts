import {Component, Injectable} from '@angular/core';
import {WebsocketService} from '../../websocket/websocket.service';
import Phaser from 'phaser';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-menu-scene',
  templateUrl: './menu-scene.component.html',
  styleUrls: ['./menu-scene.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class MenuSceneComponent extends Phaser.Scene {
  private startButton: Phaser.GameObjects.Image;
  private a = false;

  constructor(private websocketService: WebsocketService) {
    super({key: 'menu'});
  }

  create() {
    console.log('MENU CREATE !!!');

    this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, 'menu-background');
    this.startButton = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2 + 100, 'start-button');

    this.startButton.setInteractive();

    this.startButton.on('pointerover', () => {
      console.log('hovahh');
    });
    this.startButton.on('pointerout', () => {
      console.log('OUTAA HERE');
    });
    this.startButton.on('pointerup', () => {
      this.websocketService.initializeWebSocketConnection();

      setTimeout(() => {
        console.log(this.websocketService.getStompClient())
        if (!this.websocketService.getStompClient().connected) {
          console.error('Not CONNECTED');
        } else {
          this.game.scene.stop('menu');
          this.game.scene.start('main');
        }} , 4000);
    });

  }

  preload() {
    console.log('preload for menu component!');

    this.load.image('menu-background', 'assets/menu/images/pacman-menu.jpg');
    this.load.image('start-button', 'assets/menu/images/start-button.jpg');
  }

  update() {
    console.log('SCENA MENU');
    if (this.a === true) {
      // this.websocketService.sendMessage('gfdgfdg');
    }

  }

}
