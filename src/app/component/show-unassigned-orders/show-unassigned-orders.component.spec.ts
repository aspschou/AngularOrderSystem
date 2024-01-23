import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUnassignedOrdersComponent } from './show-unassigned-orders.component';

describe('ShowUnassignedOrdersComponent', () => {
  let component: ShowUnassignedOrdersComponent;
  let fixture: ComponentFixture<ShowUnassignedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUnassignedOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUnassignedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
