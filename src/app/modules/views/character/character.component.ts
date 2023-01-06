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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id']
      this.charactersService.getCharacter(id)
        .subscribe((res: any) => {
          console.log('3', res)
          this.character = res;
          console.log('4', this.character)
        })
    })
  }

}
