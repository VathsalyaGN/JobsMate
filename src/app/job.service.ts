import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of, Subject } from 'rxjs';
import { POSTS } from './postData';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  post:Post[];
  filterData :Post[];

  constructor() { }

  getJobs() {
    // return of(POSTS);
    this.postSubject.next(POSTS);
  }
  postSubject=new Subject<Post[]>();

  getJob(id: number): Post{
    console.log(id)
    return POSTS.find(x => x.id === id);
  }

  getFilter(value){
    let filterData: Post[] = POSTS;
    if (!value.fulltime)
      filterData = filterData.filter(word => word.jobType !== "Full Time");
    if (!value.parttime)
      filterData = filterData.filter(word => word.jobType !== "Part Time");
    if (!value.internship)
      filterData = filterData.filter(word => word.jobType !== "Internship");
    console.log(filterData)
    this.postSubject.next(filterData);
  }
  
}
