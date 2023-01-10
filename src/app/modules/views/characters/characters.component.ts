import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  constructor(
    private charactersService: CharactersService
  ) {

  }

  ngOnInit(): void {
  }

  
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value
    console.log(filterValue)
	//	this.designersSource.filter = filterValue.trim().toLowerCase()
	}

}
