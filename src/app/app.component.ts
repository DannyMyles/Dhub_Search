import { Component } from '@angular/core';
import { HelpersService } from './helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github-search';
  theme:String = "lightTheme";
  themeLabel:String = "Dark Theme";

  constructor(private helper:HelpersService){
    this.helper.theme.subscribe((themeName:String)=>{

      this.theme = themeName;

      if(themeName == "lightTheme"){
        this.themeLabel = "Light Theme";
      }
      else{
        this.themeLabel = "Dark Theme";
      }
    });
  }

  changeTheme(){
    this.helper.theme.next(this.theme == "lightTheme" ? "darkTheme" : "lightTheme")
  }
}
