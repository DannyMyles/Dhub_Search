import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm:FormGroup = new FormGroup({
    search: new FormControl("")
  })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search (evt:any){
    evt.preventDefault();
    const username= this.searchForm.get('search')?.value
    console.log(username)
    this.router.navigate(["/profile",username])
    }


}
