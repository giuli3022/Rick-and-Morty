import { Component, Input } from '@angular/core';
import { Character } from 'src/app/shared/characters.interface';
import { CharactersService } from 'src/app/shared/characters.service';

type RequestInfo = {
  next: string;
}
@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})

export class CharacterCardComponent {
  @Input() character!: Character;
  info: RequestInfo = {
    next: '',
  }
  private page = 1


}
