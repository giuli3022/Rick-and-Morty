import { Component, OnInit } from '@angular/core';
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
  characters: Character[] = []
  info: RequestInfo = {
    next: '',
  }
  private page = 1

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  private getCharacters(): void {
    this.charactersService.getAllCharacters()
      .subscribe((res: any) => {
        console.log('3', res)
        this.characters = res.charactersList
        this.info = res.info
      })
  }

}
