import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdataItemComponent } from './searchdata-item.component';

describe('SearchdataItemComponent', () => {
  let component: SearchdataItemComponent;
  let fixture: ComponentFixture<SearchdataItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdataItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
