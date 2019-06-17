import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostjoblistComponent } from './postjoblist.component';

describe('PostjoblistComponent', () => {
  let component: PostjoblistComponent;
  let fixture: ComponentFixture<PostjoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostjoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostjoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
