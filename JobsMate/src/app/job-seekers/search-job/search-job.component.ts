import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../classts/Post';
import { PostJobService } from 'src/app/post-job.service';
import { POSTLIST } from 'src/app/postlists';
import { Sort,MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {

  postlists: Post[];


  constructor(private  postJobService: PostJobService) {
    this.postlists = POSTLIST.slice();
   }

  ngOnInit() {  
      

  this.postJobService.getpostlist()
  .subscribe(data=>this.postlists=data)
  }
  sortData(sort: Sort) {
    const data = POSTLIST.slice();
    if (!sort.active || sort.direction === '') {
      this.postlists = data;
      return;
    }

    this.postlists = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'jobid': return this.compare(a.jobid, b.jobid, isAsc);
        case 'jobTitle': return this.compare(a.jobTitle, b.jobTitle, isAsc);
        case 'company': return this.compare(a.company, b.company, isAsc);
        case 'location': return this.compare(a.location, b.location, isAsc);
        default: return 0;
      }
    });
  }
  compare(a: string | number | String, b: string | number | String, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
  }
  


  

