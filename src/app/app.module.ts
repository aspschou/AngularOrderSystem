import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { WebShopComponent } from './component/web-shop/web-shop.component';
import { CreateOrderComponent } from './component/create-order/create-order.component';
import { ShowMyOrderComponent } from './component/show-my-order/show-my-order.component';
import { ShowUnassignedOrdersComponent } from './component/show-unassigned-orders/show-unassigned-orders.component';
import { ShowMyPendingDeliveriesComponent } from './component/show-my-pending-deliveries/show-my-pending-deliveries.component';
import { ShowDelayedDeliveriesComponent } from './component/show-delayed-deliveries/show-delayed-deliveries.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    WebShopComponent,
    CreateOrderComponent,
    ShowMyOrderComponent,
    ShowUnassignedOrdersComponent,
    ShowMyPendingDeliveriesComponent,
    ShowDelayedDeliveriesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
