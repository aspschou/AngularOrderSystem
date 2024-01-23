import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/service/mock-data.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-show-my-order',
  templateUrl: './show-my-order.component.html',
  styleUrls: ['./show-my-order.component.css']
})
export class ShowMyOrderComponent implements OnInit {
  orders: Order[] = [];

  constructor(private mockDataService: MockDataService, private router: Router) { }

  ngOnInit(): void {
    this.orders = this.mockDataService.generateOrders();
  }

}
