import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPagingComponent } from './custom-paging.component';

describe('CustomPagingComponent', () => {
  let component: CustomPagingComponent;
  let fixture: ComponentFixture<CustomPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
