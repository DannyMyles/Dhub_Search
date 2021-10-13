import { Injectable } from '@angular/core';
import { Http, Header }  from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private
  constructor(private http:Http) { }
}
