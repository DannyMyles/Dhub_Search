import { Injectable } from '@angular/core';
import { Http, Headers }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username!: string;
  private clientid = '1279d7ec943e647e717e'
  private clientsecret = '1271fce86f453086ae073f7a83f4f5af7f95dca5'

  constructor(private http:Http) {
  console.log("service is now ready");
   this.username ='DannyaMyles'
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/DannyMyles")
  }
}
