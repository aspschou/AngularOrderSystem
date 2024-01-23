import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { User } from '../models/user';
import { Order } from '../models/order';
import { OrderState } from '../models/order-state';
import { UserRole } from '../models/user-role';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  generateProducts(): Product[] {
    return [
      {id: 1, name: 'phone', description: 'newest phone on the market', price: 5000},
      {id: 2, name: 'pc', description: 'custom build pc', price: 8000},
      {id: 3, name: 'chair', description: 'refurbished, as good as new', price: 2000}
    ]
  }

  generateOrders(): Order[] {
    const products = this.generateProducts();
    const currentDate = new Date();
    return [
      {id: 1, created_at: currentDate, amount: 1, price: 15000, assigned_to_driver_at: currentDate, delivered_at: currentDate, last_modified_at: currentDate, last_modified_by: 'delivery1', product: products, orderState: OrderState.ASSIGNED_TO_DRIVER}
    ]
  }

  generateUsers(): User[] {
    const orders = this.generateOrders();
    return [
      {id: 1, name: 'Anders', display_name: 'asp', address_line: 'abcgade 1', postal_code: '8000', city: 'Aarhus', country_code: '', phone_number: '111111111', mail: 'abc@11.com', password: 'password1', user_role: UserRole.CUSTOMER, orders: orders}
    ]
  }

}
