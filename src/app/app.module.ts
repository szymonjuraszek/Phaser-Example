import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MainSceneComponent } from './scenes/main-scene/main-scene.component';
import { MenuSceneComponent } from './scenes/menu-scene/menu-scene.component';
import {WebsocketService} from './websocket/websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MainSceneComponent,
    MenuSceneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
