
export class User {
  login:String;
  bio:String;
  avatar_url:string

  constructor(login:String, bio:String, avata:string){
    this.bio = bio;
    this.login = login;
    this.avatar_url = avata;
  }
}
