import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm:FormGroup = new FormGroup({
    search: new FormControl("")
  })

  constructor() { }

  ngOnInit(): void {
  }

  search (evt:any){
  evt.preventDefualt();
  const username= this.searchForm.get('search')?.value
  }

}
