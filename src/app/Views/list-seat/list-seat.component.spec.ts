import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeatComponent } from './list-seat.component';

describe('ListSeatComponent', () => {
  let component: ListSeatComponent;
  let fixture: ComponentFixture<ListSeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSeatComponent]
    });
    fixture = TestBed.createComponent(ListSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
