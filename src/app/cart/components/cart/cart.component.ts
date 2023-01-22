import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
   
  cardpro:any[]=[]
  myquantit:number=0
  totle:any=0
  name:any
  price:any


  

  
  constructor(private carserv:CartService,private formbuilder:FormBuilder,private route:Router){}
      items=this.carserv.getItems()
      checkoutForm = this.formbuilder.group({
        name: '',
        address: '',
        numcard:''
      });
  
  ngOnInit():void{
 
    this.getProductdetalisToCart()
    this.getProductToCart()
  }
  getProductToCart(){

    if("cart" in localStorage){
      this.cardpro=JSON.parse(localStorage.getItem('cart')!)
      //let check=this.cardpro.find(item=>item.id==event.item.id)

    }
    console.log("dadat",this.cardpro)
    console.log("dadat",this.cardpro)
     this.getCartTotel()

  }

  getCartTotel(){
    this.totle=0
    for(let y in this.cardpro){
      this.totle+=this.cardpro[y].item.price * this.cardpro[y].quantity
    }
  }

  plas(i:number){
   //this.cardpro[i].quantity++
   this.getCartTotel()
   localStorage.setItem("cart",JSON.stringify(this.cardpro))
  }
  minus(i:number){
  //this.cardpro[i].quantity--
  this.getCartTotel()
  localStorage.setItem("cart",JSON.stringify(this.cardpro))
  }

  deletme(id:number){
    let index=this.cardpro.findIndex(i=>i.id===id);
    this.cardpro.splice(index,1)
    alert(" this product will be deleted")
    this.getCartTotel()
    localStorage.setItem("cart",JSON.stringify(this.cardpro))
 
  }
  getProductdetalisToCart(){

    if("cart" in localStorage){
      this.cardpro=JSON.parse(localStorage.getItem('cart')!)
      //let check=this.cardpro.find(item=>item.id==event.item.id)

    }
    console.log("dadat",this.cardpro)
    console.log("dadat",this.cardpro)
      this.getCartTotel()

  }
  onSubmit():void{
    // this.items = this.carserv.clearCart();
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
     if(!this.name){
      alert("you must enter your name")
     }
  }

  final(){
     this.route.navigate(['/donecheckout'],{queryParams:{data:this.name}})
     
  }
  
}
