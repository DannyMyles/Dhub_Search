import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute, private  profileservice:ProfileService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      console.log(param);
      this.profileservice.getProfileInfo(param.username)
    })
  }

}
