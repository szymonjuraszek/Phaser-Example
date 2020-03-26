import { Component } from '@angular/core';
import {WebsocketService} from './websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title;

  constructor() {
  }
}
