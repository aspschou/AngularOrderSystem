import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyOrderComponent } from './show-my-order.component';

describe('ShowMyOrderComponent', () => {
  let component: ShowMyOrderComponent;
  let fixture: ComponentFixture<ShowMyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
