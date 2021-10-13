import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from 'src/app/repository';
import { User } from 'src/app/user';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!:User;
  repositories!:Repository[];
  active = 1;

  constructor(private route:ActivatedRoute, private  profileservice:ProfileService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      console.log(param);
      this.profileservice.getProfileInfo(param.username).then((response:User)=>{
        console.log(response);
        this.user = response;
        this.profileservice.getRepositories(response.repos_url).then((repositoryResponse:Repository[])=>{
          console.log(repositoryResponse);
          this.repositories = repositoryResponse;
        })
      })
    })
  }

}
