import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { UserRole } from '../models/user-role';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const expectedRole = route.data['expectedRole'] as UserRole;

      if(this.authService.hasRole(expectedRole)) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
  }
  
}
