import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterheadComponent } from './filterhead.component';

describe('FilterheadComponent', () => {
  let component: FilterheadComponent;
  let fixture: ComponentFixture<FilterheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterheadComponent]
    });
    fixture = TestBed.createComponent(FilterheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
