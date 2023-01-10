import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value
    console.log(filterValue)
	//	this.designersSource.filter = filterValue.trim().toLowerCase()
	}

}
