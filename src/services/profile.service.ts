import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username!: string;
  private clientid = '1279d7ec943e647e717e'
  private clientsecret = '1271fce86f453086ae073f7a83f4f5af7f95dca5'

  constructor(private http:HttpClient) {
  console.log("service is now ready");
   this.username ='DannyaMyles'
  }
  getProfileInfo(username:string){
    return this.http.get("https://api.github.com/users/" + username +"?client_id"+ this.clientid + "&client_secret" + this.clientsecret)
    .pipe(map((res:any) =>res.json()));
  }
}
