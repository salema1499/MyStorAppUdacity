import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { ProductsModule } from '../products/products.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartModule } from '../cart/cart.module';
import { DonecheckoutModule } from '../donecheckout/donecheckout/donecheckout.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ProductsModule,
    FormsModule,
    CartModule,
    DonecheckoutModule,
    ReactiveFormsModule
    
    
  ],
  exports:[
    HeaderComponent,
    FormsModule,
    CartModule,
    ProductsModule,
    RouterModule,
    DonecheckoutModule
  ]
})
export class ShardModule { }
