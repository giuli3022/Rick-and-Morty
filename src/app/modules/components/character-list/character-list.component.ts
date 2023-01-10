import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/characters.interface';
import { CharactersService } from 'src/app/shared/characters.service';

type RequestInfo = {
  next: string;
}
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit {
  @Input() character!: Character;
  info: RequestInfo = {
    next: '',
  }
  private page = 1

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    console.log(this.character)
    //this.getCharacters()
  }
/*
  getCharacters(): void {
    this.charactersService.filterCharacters('rick')
      .subscribe((res: any) => {
        this.characters = res.charactersList
        this.info = res.info
      })
  }
*/
}
