import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/shared/characters.interface';
import { CharactersService } from 'src/app/shared/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  id: number = 1
  count: number = 100
  character!: Character;
  msgBox: boolean = false;
  msgSent: boolean = false;

  constructor(
    private charactersService: CharactersService,
    private _router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCharacterData()
  }

  ngOnChanges(): void {
    this.getRandomId()
  }

  showMsg() {
    this.msgBox = !this.msgBox;
  }

  sendMsg() {
    this.msgSent = !this.msgSent;
  }

  getCharacterData() {
    this.route.params.subscribe((params) => {
      this.id = params['id']
      this.charactersService.getCharacter(this.id)
        .subscribe((res: any) => {
          this.character = res;
        })
      this.charactersService.getAllCharacters()
        .subscribe((res: any) => {
          this.count = res.info.count
        })
    })
  }

  getRandomId() {
    this.id = Math.floor(Math.random() * this.count);
    console.log(this.id)
    this._router.navigate([`/character/${this.id}`])
  }

}
