import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MainSceneComponent } from './main-scene/main-scene.component';
import { MenuSceneComponent } from './menu-scene/menu-scene.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
