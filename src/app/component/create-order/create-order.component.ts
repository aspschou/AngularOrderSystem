import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockDataService } from 'src/app/service/mock-data.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  products: Product[] = [];
  orderForm: FormGroup;

  constructor(private mockDataService: MockDataService, private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      selectedProduct: [null, Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      orderDate: [new Date(), Validators.required],
    });
  }

  ngOnInit(): void {
    this.products = this.mockDataService.generateProducts();
  }

  onSubmit(): void {
    console.log('order placed')
  }
}