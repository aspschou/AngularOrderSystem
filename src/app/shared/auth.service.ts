import { Injectable } from '@angular/core';
import { UserRole } from '../models/user-role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRoles: UserRole[] = [];

  constructor() { }

  setUserRoles(roles: UserRole[]): void {
    this.userRoles = roles;
  }

  hasRole(role: UserRole): boolean {
    return this.userRoles.includes(role)
  }

  setRole(role: UserRole): void {
    this.userRoles = [role];
  }
}
