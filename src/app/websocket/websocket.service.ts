import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Interface} from 'readline';

@Injectable()
export class WebsocketService {
  private serverUrl = 'http://localhost:8080/socket';
  private stompClient;
  message = 'fd';

  constructor() {
    console.log('Created service');
  }

  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);

    this.stompClient.connect({}, (frame) => {
      this.stompClient.subscribe('/sth', (message) => {
        console.log(message + 'cos tam');
      });

      this.stompClient.subscribe('/chat', (message) => {
        if (message.body) {
          this.message = message.body;
          console.log(message.body);
        }
      });
    });
  }

  disconnect() {
    console.error('Disconnected');
    this.stompClient.disconnect();
  }

  sendMessage(x, y) {
    // const jsonMessage = {
    //   x: x,
    //   y: y
    // };
    // console.log(jsonMessage);

    this.stompClient.send('/app/send/message', {}, JSON.stringify(new Message(x, y)));
  }

  sendMessageSth(message) {
    this.stompClient.send('/app/send/sth', {}, message);
  }

  getStompClient() {
    return this.stompClient;
  }
}

class Message {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

