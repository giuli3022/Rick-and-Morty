import { Component, OnChanges, Output, SimpleChanges } from '@angular/core';
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

export class CharactersComponent implements OnChanges {
  @Output() characters: Character[] = []
  info: RequestInfo = {
    next: '',
  };
  private page = 1
  query: string = '';
  filterValue: string = '';

  constructor(private charactersService: CharactersService) { }

	ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['query']) {
      this.filterValue = changes['query'].currentValue
    }
    this.getCharacters(this.query)
  }


  applyFilter(event: Event) {
    this.query = (event.target as HTMLInputElement).value
    if (this.query && this.query.length > 3) {
      this.getCharacters(this.query)
    }
  }

  getCharacters(query: string | null): void {
    console.log('1', query)
    this.charactersService.filterCharacters(query)
      .subscribe((res: any) => {
        this.characters = res.charactersList
        this.info = res.info
      })
  }
}
