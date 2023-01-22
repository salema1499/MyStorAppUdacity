import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productdelalis',
  templateUrl: './productdelalis.component.html',
  styleUrls: ['./productdelalis.component.css']
})
export class ProductdelalisComponent {
     myId:any
     data:any={}
  constructor(private rout:ActivatedRoute, private servpro:ProductsService){
   this.myId=this.rout.snapshot.paramMap.get("id");
   console.log(this.myId)
  }


  @Input() product:any={}

  @Output() item=new EventEmitter();
  myquantity:number=0
 
  ngOnInit():void{
  
    this.getProductDetalis()
  }
  getProductDetalis(){
    this.servpro.getProductDetalis(this.myId).subscribe(res=>{
    this.data=res
    })
  }

  add(){
    this.item.emit({item:this.product,quantity:this.myquantity})
  }


  
}
