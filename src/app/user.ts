
export class User {
  login:String;
  bio:String;
  avatar_url:string
  name:String;
  company:String
  followers:number
  following:number

  constructor(login:String,
    bio:String,
     avata:string,
     name:String,
  company:String,
  followers:number,
  following:number,){
    this.bio = bio;
    this.login = login;
    this.avatar_url = avata;
    this.name= name;
    this.company=company;
    this.followers=followers;
    this.following=following;
  }
}
