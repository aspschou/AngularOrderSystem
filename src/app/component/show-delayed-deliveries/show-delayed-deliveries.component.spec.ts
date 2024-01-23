import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelayedDeliveriesComponent } from './show-delayed-deliveries.component';

describe('ShowDelayedDeliveriesComponent', () => {
  let component: ShowDelayedDeliveriesComponent;
  let fixture: ComponentFixture<ShowDelayedDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelayedDeliveriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDelayedDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
