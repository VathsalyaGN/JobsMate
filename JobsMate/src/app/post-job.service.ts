import { Injectable } from '@angular/core';
import { Post } from "./classts/Post";
import { POSTLIST} from "./postlists";
import { Observable, of, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostJobService {
  postlist: Post[];
  constructor() { 
    this.postlist = POSTLIST;
  }

  getpostlist() : Observable<Post[]>{
    return of(this.postlist);
  }
  postSubject=new Subject<Post[]>();
  filterData:Post[];
getFilter(rgvalue) {
    console.log(rgvalue)
    let filterData = [];
    if (rgvalue.search !== "")
      filterData = filterData.filter(searchdata => searchdata.skillset === rgvalue.search);
      console.log(filterData)
    this.postSubject.next(filterData);
  }
 /* getSort(sort){
    console.log(sort);
    this.filterData = this.establishments.filter(word =>word.price >=sort.price);
    if(sort.averageRating)
    if(sort.averageRating==1)
    this.filterData=this.filterData.sort((a, b) => a.averagerating - b.averagerating);
    else
    this.filterData=this.filterData.sort((a, b) => b.averagerating - a.averagerating);
    if(sort.price)
    if(sort.price==1)
    this.filterData=this.filterData.sort((a, b) => a.price - b.price);
    else
    this.filterData=this.filterData.sort((a, b) => b.price - a.price);
    
    this.establishSubject.next(this.filterData)
    }

}*/

}

