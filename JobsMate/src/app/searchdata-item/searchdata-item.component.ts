import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../classts/Post';

@Component({
  selector: 'app-searchdata-item',
  templateUrl: './searchdata-item.component.html',
  styleUrls: ['./searchdata-item.component.css']
})
export class SearchdataItemComponent implements OnInit {
  @Input() postInstance: Post[];
  constructor() { }

  ngOnInit() {
  }

}
