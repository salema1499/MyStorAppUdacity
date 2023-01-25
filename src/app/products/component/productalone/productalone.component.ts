import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'app-productalone',
  templateUrl: './productalone.component.html',
  styleUrls: ['./productalone.component.css']
})
export class ProductaloneComponent {


 @Input() product:Product = {
  image:'',
  price:'',
  title:'',
  id:-1,
  descrption:'',
  
 };

  @Output() item=new EventEmitter();
  myquantity:number=1
 
  ngOnInit():void {

 }
 add(){
   this.item.emit({item:this.product,quantity:this.myquantity})

  
 }



}
