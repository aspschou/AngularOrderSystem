import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MockDataService } from 'src/app/service/mock-data.service';

@Component({
  selector: 'app-web-shop',
  templateUrl: './web-shop.component.html',
  styleUrls: ['./web-shop.component.css'],

})
export class WebShopComponent implements OnInit {

  products: Product[] = [];

  constructor(private mockDataService: MockDataService, private router: Router) { 
  }

  ngOnInit(): void {
    this.products = this.mockDataService.generateProducts();
  }

}
