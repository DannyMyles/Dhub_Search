import { Injectable } from '@angular/core';
import { Http, Header }  from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username!: string;
  private clientid = '1279d7ec943e647e717e'
  private clientsecret = ''

  constructor(private http:Http) {
  console.log("service is now ready");
   this.username ='Dannyamyles'
  }
}
