import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/models/user-role';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isCustomer(): boolean {
    return this.authService.hasRole(UserRole.CUSTOMER)
  }

  isDelivery(): boolean {
    return this.authService.hasRole(UserRole.DELIVERY)
  }

  isQA(): boolean {
    return this.authService.hasRole(UserRole.QA)
  }

  isWarehouse(): boolean {
    return this.authService.hasRole(UserRole.WAREHOUSE)
  }

}
