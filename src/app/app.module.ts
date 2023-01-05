import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/views/home/home.component';
import { CharacterComponent } from './modules/views/character/character.component';
import { AppRoutingModule } from './app-routing.module';
import { CharactersListComponent } from './modules/views/characters-list/characters-list.component';
import { CharacterCardComponent } from './modules/components/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    CharactersListComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
