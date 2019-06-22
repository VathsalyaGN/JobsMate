import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { Post } from '../../post';
import { JobService } from 'src/app/job.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  profile: Post;
  constructor(private router: Router, private route:ActivatedRoute,private service:JobService) { }

  ngOnInit() { 
    this.route.paramMap.subscribe((params) => {
    console.log(params);
    this.profile=this.service.getJob(+params.get('id'));
    });
  }

}
