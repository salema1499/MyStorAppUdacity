import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './component/allproducts/allproducts.component';
import { ProductdelalisComponent } from './component/productdelalis/productdelalis.component';
import { ProductaloneComponent } from './component/productalone/productalone.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AllproductsComponent,
    ProductdelalisComponent,
    ProductaloneComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class ProductsModule { }
