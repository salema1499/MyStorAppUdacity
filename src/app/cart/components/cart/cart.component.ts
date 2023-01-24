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
  total:number=0
  name:string = '';
  price:number = 0 ;
  
  doneform=new FormGroup({
    username:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    numcard:new FormControl("",[Validators.pattern(/[0-9]/)]),

  })

  isSubmit:boolean=false 
  get username(){return this.doneform.get('username')}
  get address(){return this.doneform.get('address')}
  get numcard(){return this.doneform.get('numcard')}
  

  
  constructor(private carserv:CartService,private formbuilder:FormBuilder,private route:Router){}
      
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
    this.total=0
    for(let y in this.cardpro){
      this.total+=this.cardpro[y].item.price * this.cardpro[y].quantity
     
    }
   
    
    
  }
  detcted(){
    this.getCartTotel()
    localStorage.setItem("cart",JSON.stringify(this.cardpro))
  
  }


  plas(i:number){
  //   this.cardpro[i].quantity++
  //   localStorage.setItem("cart",JSON.stringify(this.cardpro))

  //  this.getCartTotel()

 
   this.cardpro[i].quantity++
   this.getCartTotel()
   localStorage.setItem("cart",JSON.stringify(this.cardpro))
  }
  minus(i:number){
   
  this.cardpro[i].quantity--
  this.getCartTotel()
  localStorage.setItem("cart",JSON.stringify(this.cardpro))
  
  }

  deletme(id:number){
    
    this.cardpro.splice(id,1)
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
  handel(){
    // this.items = this.carserv.clearCart();
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
     console.log(this.doneform)
     this.isSubmit=true
  }

  final(){
  
    if(this.isSubmit){
        this.route.navigate(['/donecheckout'],{queryParams:{data:this.name}})

     
    }else{
      alert("You Should Enter Your Data In The First...")
    }
    return ""
     
  }
 
  
}
