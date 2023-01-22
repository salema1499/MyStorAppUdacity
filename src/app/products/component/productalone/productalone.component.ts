import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productalone',
  templateUrl: './productalone.component.html',
  styleUrls: ['./productalone.component.css']
})
export class ProductaloneComponent {


 @Input() product:any={}

  @Output() item=new EventEmitter();
  myquantity:number=0
 
  ngOnInit():void {

 }
 add(){
   this.item.emit({item:this.product,quantity:this.myquantity})

  
 }



}
