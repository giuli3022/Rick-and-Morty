import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id = 1
  count = 100

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getRandomId()
  }

  getRandomId() {
    this.charactersService.getAllCharacters()
      .subscribe((res: any) => {
        this.count = res.info.count
      })
    this.id = Math.floor(Math.random() * this.count);
  }

}
