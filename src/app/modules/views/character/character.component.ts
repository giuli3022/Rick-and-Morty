import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/shared/characters.interface';
import { CharactersService } from 'src/app/shared/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  //TODO: cambiar este any
  character: any;

  constructor(private charactersService: CharactersService, private route: ActivatedRoute) { }
  id = 1
  count = 100

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']
      this.charactersService.getCharacter(this.id)
        .subscribe((res: any) => {
          this.character = res;
        })
    })
    this.getRandomId()
  }

  ngOnChanges(): void {
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
