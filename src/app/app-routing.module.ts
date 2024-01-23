import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebShopComponent } from './component/web-shop/web-shop.component';
import { CreateOrderComponent } from './component/create-order/create-order.component';
import { ShowMyOrderComponent } from './component/show-my-order/show-my-order.component';
import { ShowUnassignedOrdersComponent } from './component/show-unassigned-orders/show-unassigned-orders.component';
import { ShowMyPendingDeliveriesComponent } from './component/show-my-pending-deliveries/show-my-pending-deliveries.component';
import { ShowDelayedDeliveriesComponent } from './component/show-delayed-deliveries/show-delayed-deliveries.component';
import { AuthGuard } from './shared/auth.guard';
import { UserRole } from './models/user-role';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'web-shop', component: WebShopComponent },
  { path: 'create-order', component: CreateOrderComponent, canActivate: [AuthGuard], data: {expectedRole: UserRole.CUSTOMER} },
  { path: 'show-my-orders', component: ShowMyOrderComponent, canActivate: [AuthGuard], data: {expectedRole: UserRole.CUSTOMER} },
  { path: 'show-unassigned-orders', component: ShowUnassignedOrdersComponent, canActivate: [AuthGuard], data: {expectedRole: UserRole.WAREHOUSE} },
  { path: 'show-my-pending-deliveries', component: ShowMyPendingDeliveriesComponent, canActivate: [AuthGuard], data: {expectedRole: UserRole.DELIVERY} },
  { path: 'show-delayed-deliveries', component: ShowDelayedDeliveriesComponent, canActivate: [AuthGuard], data: {expectedRole: UserRole.QA} },
  { path: '', redirectTo: '/web-shop', pathMatch: 'full'},
  { path: '**', redirectTo: '/web-shop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
