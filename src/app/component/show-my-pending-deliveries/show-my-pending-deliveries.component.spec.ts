import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyPendingDeliveriesComponent } from './show-my-pending-deliveries.component';

describe('ShowMyPendingDeliveriesComponent', () => {
  let component: ShowMyPendingDeliveriesComponent;
  let fixture: ComponentFixture<ShowMyPendingDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyPendingDeliveriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMyPendingDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
