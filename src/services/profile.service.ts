import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username!: string;
  private clientid = environment.clientid
  private clientsecret = environment.clientsecret

  constructor(private http:HttpClient) {
  console.log("service is now ready");
   this.username ='DannyaMyles'
  }
  getProfileInfo(username:string):Promise<any>{
    return this.http.get("https://api.github.com/users/" + username +"?client_id"+ this.clientid + "&client_secret" + this.clientsecret)
    .toPromise();
  }
  getRepositories(url:string){
    return this.http.get( url +"?client_id"+ this.clientid + "&client_secret" + this.clientsecret)
    .toPromise();
  }
}

