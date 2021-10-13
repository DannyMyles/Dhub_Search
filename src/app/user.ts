import { Url } from "url";

export class User {
  login:String;
  bio:String;
  avata:Url

  constructor(login:String, bio:String, avata:Url){
    this.bio = bio;
    this.login = login;
    this.avata = avata;
  }
}
