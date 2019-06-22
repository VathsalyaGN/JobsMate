import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of, Subject } from 'rxjs';
import { POSTS } from './postData';
import { User } from './user';
import { USERS } from './UserData';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  post:Post[];
  filterData :Post[];
  user:User[];
  obj={};

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

  getProfile(){
    this.postProfileSubject.next(USERS);

  }
  postProfileSubject=new Subject<User[]>();

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

  EditProfile(edit)
  {
    for (var i in this.user) {
      if (this.user[i] === edit) {
        this.user[i]=edit;
     }
    }
    this.obj=edit;
    console.log(this.obj)
   this.getProfile();
  }
  
}
