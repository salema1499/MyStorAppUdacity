import { Component,OnInit} from '@angular/core';
import Product from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {

  products:Product[]=[]
  cardpro:any[]=[]
   constructor(private services:ProductsService){

   }
   ngOnInit():void{
      this.getProducts()

     
   }
   getProducts(){
    this.services.getAllProducts().subscribe((res:any)=>{
      this.products=res
      console.log(res)
      console.log("hello")
    },err=>{
      alert(`waiting tnis is error..${err}`)
    }
    )
   }

   addtocart(event:any){
  
    if("cart" in localStorage){
          this.cardpro=JSON.parse(localStorage.getItem('cart')!)
          let check=this.cardpro.find(item=>item.item.id==event.item.id)
          if(check){
            alert("product is aleady in your cart")
          }else{
          this.cardpro.push(event)
          alert("this product added in your cart successfully")
          localStorage.setItem('cart',JSON.stringify(this.cardpro))
          }
    } else{
          this.cardpro.push(event)
          localStorage.setItem('cart',JSON.stringify(this.cardpro))
         
    }
    console.log("car",this.cardpro)
    console.log( "even",event)
  }

}
