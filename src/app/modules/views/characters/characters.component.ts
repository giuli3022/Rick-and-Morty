import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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

export class CharactersComponent implements OnInit, OnChanges {
  @Output() characters: Character[] = []
  info: RequestInfo = {
    next: '',
  };
  page: number = 1; 
  query: string = '';
  filterValue: string = '';

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters(this.query, this.page)

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['query']) {
      this.filterValue = changes['query'].currentValue
    } else {
      this.query = ''
    }
    this.getCharacters(this.query, this.page)
  }

  nextPage() {
    this.page = this.page + 1
    this.getCharacters(this.query, this.page)
    console.log(this.page)
  }

  prevPage() {
    this.page = this.page - 1
    this.getCharacters(this.query, this.page)
    console.log(this.page)
  }

  applyFilter(event: Event) {
    this.query = (event.target as HTMLInputElement).value
    if (this.query && this.query.length > 2) {
      this.getCharacters(this.query, this.page)
    }
  }

  getCharacters(query: string | null, page: number): void {
    this.charactersService.filterCharacters(query, page)
      .subscribe((res: any) => {
        this.characters = res.charactersList
        this.info = res.info
      })
  }
}
