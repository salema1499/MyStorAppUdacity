import { Component,OnInit,ViewEncapsulation } from '@angular/core';
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
  myquantit:number=1
  total:number=0
  name:string = '';
  price:number = 0 ;
  msg: string=""
  doneform=new FormGroup({
    username:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    numcard:new FormControl("",[Validators.pattern("[1-9]{16}")]),

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
   this.cardpro[i].quantity++
   this.getCartTotel()
   localStorage.setItem("cart",JSON.stringify(this.cardpro))
  }


  minus(i:number){
    const done=1
    this.cardpro[i].quantity--
    if(this.cardpro[i].quantity===0){
      let ask = prompt("this item quantity will be 0 it will delete from your cart ..DO you need to remove this item ???");
      if (ask != null) {
         this.cardpro.splice(i,1)
    }
  }
  if(this.cardpro[i].quantity<0){
    this.cardpro.splice(i,1)
    alert("it will deleted..")
  }
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
    }
    console.log("dadat",this.cardpro)
    console.log("dadat",this.cardpro)
      this.getCartTotel()

  }


  handel(){
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


  allowNumericDigitsOnlyOnKeyUp(e:any) {		
		console.log(e.target.value);
		
		if(/\D/g.test(e.target.value)) {
			e.target.value = e.target.value.replace(/\D/g,"");
    
		}
	}
 
  
}
