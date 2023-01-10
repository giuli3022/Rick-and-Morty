import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filterValue: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
	applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value
    if (this.filterValue && this.filterValue.length > 3) {
      this.router.navigate(['/characters'], {
        queryParams: { query: this.filterValue },
      });
    }
    console.log('search',this.filterValue)
	}

}
