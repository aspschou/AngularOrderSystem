import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/models/user-role';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  customerClicked() {
    this.authService.setRole(UserRole.CUSTOMER)
    this.router.navigateByUrl('web-shop')
  }
  
  deliveryClicked() {
    this.authService.setRole(UserRole.DELIVERY)
    this.router.navigateByUrl('show-my-pending-deliveries')
  }
  
  qaClicked() {
    this.authService.setRole(UserRole.QA)
    this.router.navigateByUrl('delayed-deliveries')
  }
  
  warehouseClicked() {
    this.authService.setRole(UserRole.WAREHOUSE)
    this.router.navigateByUrl('show-unassigned-orders')
  }

}
