import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { User } from 'src/app/user';
import { JobService } from 'src/app/job.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editForm: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  Address: string = '';
  user:User[];

  constructor(private fb :FormBuilder,private service: JobService,private router:Router,private route:ActivatedRoute) { 
    this.editForm = fb.group({
      'FirstName' : [null, Validators.required],
      'LastName' : [null, Validators.required],
      'Address' : [null, Validators.required],
      'DOB' : [null, Validators.required],
     
    });
  
    }
    onFormSubmit() {
      
      this.user = this.editForm.value;
        // stop here if form is invalid
        if (this.editForm.invalid) {
            return;
        }
       this.service.EditProfile(this.editForm.value)
    }
   

  ngOnInit() {
  }

}
