import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modules/views/home/home.component';
import { CharacterComponent } from './modules/views/character/character.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterListComponent } from './modules/components/character-list/character-list.component';
import { CharactersComponent } from './modules/views/characters/characters.component';
import { CommonModule } from '@angular/common';

const components = [
  AppComponent,
  HomeComponent,
  CharacterComponent,
  CharactersComponent,
  CharacterListComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    ...components
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
