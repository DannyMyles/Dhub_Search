// import { profile } from "console";

export class Repository {
  name:String;
  description:String
  Private:Boolean
  constructor(name:String, description:String, Private:Boolean){
    this.name=name;
    this.description=description;
    this.Private=Private;
  }
}

