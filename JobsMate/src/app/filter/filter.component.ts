import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { PostJobService } from '../post-job.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterForm:FormGroup;

  constructor(private formBuilder: FormBuilder,private  postJobService: PostJobService) { }

  ngOnInit() {

    this.filterForm=this.formBuilder.group({
      maxsalary:[2500000],
      minsalary:[10000],
      jobTitle:"",
      company:"",
      skillset:['']
    });
    this.filterForm.valueChanges.subscribe(price => {
      this.postJobService.getFilter(price);
    });
  }

}
