import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DoneCheck from 'src/app/models/donecheck.model';
@Component({
  selector: 'app-donecheckout',
  templateUrl: './donecheckout.component.html',
  styleUrls: ['./donecheckout.component.css']
})
export class DonecheckoutComponent {
  

  constructor(private route:ActivatedRoute){}

  name:DoneCheck={
    name:""
  }
 
  ngOnInit():void{
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.name=params.data
   
    })
  }
}
