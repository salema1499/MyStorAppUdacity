import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { DonecheckoutComponent } from './donecheckout/components/donecheckout/donecheckout.component';
import { NotfoundComponent } from './notFound/notfound.component';
import { AllproductsComponent } from './products/component/allproducts/allproducts.component';
import { ProductdelalisComponent } from './products/component/productdelalis/productdelalis.component';

const routes: Routes = [
  {path:'', component:AllproductsComponent},
  {path:'allProducts', component:AllproductsComponent},
  {path:'detalis/:id',component:ProductdelalisComponent},
  {path:'cart',component:CartComponent},
  {path:'donecheckout',component:DonecheckoutComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
