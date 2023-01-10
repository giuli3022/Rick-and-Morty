import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Character } from 'src/app/shared/characters.interface';
import { CharactersService } from 'src/app/shared/characters.service';


type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent {
  characters: Character[] = []
  info: RequestInfo = {
    next: '',
  };
  private page = 1
  private query: string = '';

  constructor(private router: Router, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharactersByQuery(): void {
    /*this.route.queryParams.subscribe((params: ParamMap) => {
      this.query = params['q'];
      this.getCharacters();
    });*/
    this.query = 'morty';
    this.getCharacters();
  }

  getCharacters(): void {
    this.charactersService.filterCharacters(this.query)
      .subscribe((res: any) => {
        this.characters = res.charactersList
        this.info = res.info
      })
  }
}
