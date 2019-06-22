import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Sort, MatCardTitle, MatSort } from '@angular/material';
import {Router,ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';
import { JobService } from '../../job.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User[];
  subscription:Subscription;

  constructor(private formBuilder: FormBuilder,private service: JobService,private router:Router,private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.service.postProfileSubject.subscribe(user =>this.user= user);
    this.service.getProfile();
    console.log(this.user)
   }
  
   edit(){
      
    this.router.navigate(['../editProfile'],{relativeTo: this.route});

}
}
